"use client";

import React from "react";
import { texts } from "@/lib/texts";

type ResearchProjectProps = {
  title: string;
  desc?: string;
  url: string;
  text?: string;
};

function ResearchProject({ title, desc, url, text }: ResearchProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 link-card">
      <div className="media">
        <div className="media-content">
          <p className="text-xl font-semibold">{title}</p>
          {desc && <p className="text-gray-600">{desc}</p>}
        </div>
      </div>

      <div className="content">
        <p>{text}</p>
        <a
          href={url}
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          here
        </a>
      </div>
    </div>
  );
}

export default function ResearchProjPage() {
  const lang: "en" | "ja" = "ja";

  return (
    <div id="content_links">
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            {texts.menu_research_proj[lang]}
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <ResearchProject
          title={texts.research_proj_crest[lang]}
          desc={texts.research_proj_crest_desc[lang]}
          url="http://crest.ailab.ics.keio.ac.jp/context/"
        />
        <ResearchProject
          title={texts.research_proj_sip[lang]}
          desc={texts.research_proj_sip_desc[lang]}
          url="https://www.nedo.go.jp/activities/ZZJP2_100126.html"
        />
        {lang === "ja" && (
          <ResearchProject
            title={texts.research_proj_agv[lang]}
            desc={lang}
            url="https://agventurelab.or.jp/"
          />
        )}
      </div>
    </div>
  );
}
