"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import {
  getMembersData,
  getPastMembersData,
  type MemberInfo,
  type PastMemberInfo,
} from "@/lib/serverDataFetchers";
import { CurrentMembersList } from "./_components/CurrentMembersList";
import { PastMembersList } from "./_components/PastMembersList";

export default function MemberPage() {
  const [members, setMembers] = useState<MemberInfo[]>([]);
  const [pastMembers, setPastMembers] = useState<PastMemberInfo[]>([]);
  const params = useParams();
  const locale = params.locale as string;
  const lang: "en" | "ja" = locale === "en" ? "en" : "ja";
  const t = useTranslations();

  useEffect(() => {
    // Fetch current members
    getMembersData().then((data) => {
      setMembers(data || []);
    });

    // Fetch past members
    getPastMembersData().then((data) => {
      setPastMembers(data || []);
    });
  }, []);

  return (
    <div id="content_members">
      <PageHero title={t("navigation.member")} />
      <div className="container mx-auto px-6 py-8">
        <CurrentMembersList members={members} lang={lang} />
        <PastMembersList pastMembers={pastMembers} lang={lang} />
      </div>
    </div>
  );
}
