"use client";

import React from "react";
import { texts } from "@/lib/texts";
import { usePublicationData } from "@/hooks/usePublicationData";
import { PublicationList } from "@/components/shared/PublicationList";

const JsonBase =
  "https://raw.githubusercontent.com/imai-laboratory/publications_data/master/";

export default function PublicationJournalPage() {
  const { papers, loading } = usePublicationData({
    jsonBase: JsonBase,
    dataType: "journal",
  });
  const lang: "en" | "ja" = "ja";

  return (
    <div>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            {texts.publication_journal_head[lang]}
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PublicationList papers={papers.filter(Boolean)} lang={lang} />
        )}
      </div>
    </div>
  );
}
