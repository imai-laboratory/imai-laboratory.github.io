"use client";

import { getLangText } from "@/lib/langUtils";
import { getMemberImageUrl, type MemberInfo } from "@/lib/serverDataFetchers";
import { MemberCard } from "./MemberCard";
import { MemberSkeleton } from "./MemberSkeleton";

type CurrentMembersListProps = {
  members: MemberInfo[];
  lang: string;
};

const MemberSection = ({
  memberInfo,
  lang,
}: {
  memberInfo: MemberInfo;
  lang: string;
}) => {
  const role = memberInfo.role;
  const membersList = memberInfo.members;

  return (
    <div className="opacity-100 translate-y-0">
      <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">
        {getLangText(role, lang)}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {membersList.map((member, i) => (
          <div
            key={`${getLangText(role, "en")}-${getLangText(member.name, "en")}-${i}`}
            className="opacity-100 translate-y-0"
          >
            <MemberCard
              name={getLangText(member.name, lang)}
              grade={getLangText(member.grade, lang)}
              email={member.email}
              optionElement={member.option}
              imgUrl={getMemberImageUrl(member.img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const CurrentMembersList = ({
  members,
  lang,
}: CurrentMembersListProps) => {
  if (members.length === 0) {
    return (
      <div>
        <MemberSkeleton />
        <MemberSkeleton />
      </div>
    );
  }

  return (
    <div>
      {members.map((memberInfo) => (
        <div key={`role-${getLangText(memberInfo.role, "en")}`}>
          <MemberSection memberInfo={memberInfo} lang={lang} />
        </div>
      ))}
    </div>
  );
};
