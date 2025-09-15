import React from "react";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
export const dynamic = "force-static";
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

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchProjPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div id="content_links">
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">プロジェクト</h1>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <ResearchProject
          title="CRESTプロジェクト"
          desc="コンテキスト情報理解"
          url="http://crest.ailab.ics.keio.ac.jp/context/"
        />
        <ResearchProject
          title="SIPプロジェクト"
          desc="人工知能技術"
          url="https://www.nedo.go.jp/activities/ZZJP2_100126.html"
        />
        <ResearchProject
          title="AGVプロジェクト"
          desc="アグリテック研究"
          url="https://agventurelab.or.jp/"
        />
      </div>
    </div>
  );
}
