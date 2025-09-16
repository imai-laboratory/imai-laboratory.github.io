"use client";

import { useTranslations } from "next-intl";
import { getLangText } from "@/lib/langUtils";
import type { PastMember, PastMemberInfo } from "@/lib/serverDataFetchers";

const PastMemberItem = ({
  member,
  lang,
}: {
  member: PastMember;
  lang: string;
}) => {
  const t = useTranslations();
  let resText = "";

  const name = getLangText(member.name, lang);
  resText += name;

  const gradeMark = member.grade;
  if (gradeMark === "d") {
    resText += `·(${t("members.grade.doctor")})`;
  } else if (gradeMark === "m") {
    resText += `·(${t("members.grade.master")})`;
  } else if (gradeMark === "b") {
    resText += `·(${t("members.grade.bachelor")})`;
  } else if (gradeMark) {
    resText += ` (${gradeMark})`;
  }

  return <div>{resText}</div>;
};

type PastMembersListProps = {
  pastMembers: PastMemberInfo[];
  lang: string;
};

export const PastMembersList = ({
  pastMembers,
  lang,
}: PastMembersListProps) => {
  const t = useTranslations();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-8">{t("members.past.head")}</h2>
      {pastMembers.map((memberInfo, _yearIdx) => {
        const year = memberInfo.year;
        const membersList = memberInfo.members;

        const yearMemberList = membersList.map((member, memberIdx) => (
          <div key={`${year}-${getLangText(member.name, "en")}-${memberIdx}`}>
            <PastMemberItem member={member} lang={lang} />
          </div>
        ));

        return (
          <div key={`past-year-${year}-${membersList.length}`}>
            <h2 className="text-xl font-bold mb-4 mt-6">{year}</h2>
            {yearMemberList}
          </div>
        );
      })}
    </div>
  );
};
