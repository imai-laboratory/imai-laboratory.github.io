"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const UrlBase =
  "https://raw.githubusercontent.com/imai-laboratory/members_data/master/";
const MembersJson = UrlBase + "members.json";
const MembersPastJson = UrlBase + "past_members.json";
const MemberImageURL = UrlBase + "imgs/";

async function fetchJson(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    return await response.json();
  } catch (ex) {
    console.error(ex);
    return [];
  }
}

function getLangText(elem: any, lang: string): string {
  if (!elem) return "";
  const text = elem[lang];
  if (text !== undefined) {
    return text;
  }
  const arr = Object.values(elem);
  if (arr.length === 0) {
    return "";
  }
  return arr[0] as string;
}

type MemberElemProps = {
  name: string;
  grade: string;
  email: string;
  optionElement?: string;
  imgUrl: string;
};

function MemberElem({
  name,
  grade,
  email,
  optionElement,
  imgUrl,
}: MemberElemProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <div className="mb-4">
          <img
            className="w-24 h-24 mx-auto rounded-full object-cover"
            src={imgUrl}
            alt={name}
          />
        </div>
        <p className="font-semibold text-lg mb-2">{name}</p>
        <p className="text-gray-600 text-sm">{grade}</p>
        <p className="text-gray-600 text-sm">{email}</p>
        {optionElement && (
          <div dangerouslySetInnerHTML={{ __html: optionElement }} />
        )}
      </div>
    </div>
  );
}

type Member = {
  name: { [key: string]: string };
  grade: { [key: string]: string };
  email: string;
  option?: string;
  img: string;
};

type MemberInfo = {
  role: { [key: string]: string };
  members: Member[];
};

type PastMember = {
  name: { [key: string]: string };
  grade: string;
};

type PastMemberInfo = {
  year: string;
  members: PastMember[];
};

function createMemberList(members: MemberInfo[], lang: string) {
  return members.map((memberInfo, roleIdx) => {
    const role = memberInfo.role;
    const membersList = memberInfo.members;

    const roleMemberList = membersList.map((member, i) => (
      <MemberElem
        key={`${roleIdx}_${i}`}
        name={getLangText(member.name, lang)}
        grade={getLangText(member.grade, lang)}
        email={member.email}
        optionElement={member.option}
        imgUrl={MemberImageURL + member.img}
      />
    ));

    return (
      <div key={roleIdx}>
        <h2 className="text-2xl font-bold mb-6 mt-8">
          {getLangText(role, lang)}
        </h2>
        <div className="flex flex-wrap -mx-4">{roleMemberList}</div>
      </div>
    );
  });
}

function createPastMemberElem(member: PastMember, lang: string, t: any) {
  let resText = "";

  const name = getLangText(member.name, lang);
  resText += name;

  const gradeMark = member.grade;
  if (gradeMark === "d") {
    resText += " (" + t("members_past_grade_doctor") + ")";
  } else if (gradeMark === "m") {
    resText += " (" + t("members_past_grade_master") + ")";
  } else if (gradeMark === "b") {
    resText += " (" + t("members_past_grade_bachelor") + ")";
  } else if (gradeMark) {
    resText += " (" + gradeMark + ")";
  }
  return <div>{resText}</div>;
}

function createPastMemberList(pastMembers: PastMemberInfo[], lang: string, t: any) {
  return pastMembers.map((memberInfo, yearIdx) => {
    const year = memberInfo.year;
    const membersList = memberInfo.members;

    const yearMemberList = membersList.map((member, memberIdx) => (
      <div key={`${yearIdx}_${memberIdx}`}>
        {createPastMemberElem(member, lang, t)}
      </div>
    ));

    return (
      <div key={yearIdx}>
        <h2 className="text-xl font-bold mb-4 mt-6">{year}</h2>
        {yearMemberList}
      </div>
    );
  });
}

export default function MemberPage() {
  const [members, setMembers] = useState<MemberInfo[]>([]);
  const [pastMembers, setPastMembers] = useState<PastMemberInfo[]>([]);
  const params = useParams();
  const locale = params.locale as string;
  const lang: "en" | "ja" = locale === "en" ? "en" : "ja";
  const t = useTranslations("members");

  useEffect(() => {
    // Fetch current members
    fetchJson(MembersJson).then((data) => {
      setMembers(data || []);
    });

    // Fetch past members
    fetchJson(MembersPastJson).then((data) => {
      setPastMembers(data || []);
    });
  }, []);

  return (
    <div id="content_members">
      <section id="hero-members" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("members_head")}
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        {createMemberList(members, lang)}
        <h2 className="text-2xl font-bold mb-6 mt-8">
          {t("members_past_head")}
        </h2>
        {createPastMemberList(pastMembers, lang, t)}
      </div>
    </div>
  );
}
