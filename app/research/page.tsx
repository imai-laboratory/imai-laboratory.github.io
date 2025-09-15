"use client";

import type React from "react";
import { texts } from "@/lib/texts";

// Research Section component
type ResearchSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <div id={"research_section_" + id}>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>
      {children}
    </div>
  );
}

// Research SubSection component

type ResearchSubSectionProps = {
  title?: string;
  text: string;
  children?: React.ReactNode;
};

function ResearchSubSection({
  title,
  text,
  children,
}: ResearchSubSectionProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div className="grid md:grid-cols-2 gap-8">
        {children}
        <div className="prose max-w-none">{text}</div>
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const lang: "en" | "ja" = "ja";

  return (
    <div id="content_research">
      <section id="hero-research" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {texts.menu_research_theme[lang]}
          </h1>
        </div>
      </section>

      <ResearchSection key="isc" id="isc" title={texts.research_isc_head[lang]}>
        <ResearchSubSection text={texts.research_isc_exp[lang]}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4"
              controls
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="scains"
        id="scains"
        title={texts.research_scains_head[lang]}
      >
        <ResearchSubSection text={texts.research_scains1_exp[lang]}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4"
              controls
            />
          </div>
        </ResearchSubSection>
        <ResearchSubSection text={texts.research_scains2_exp[lang]}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4"
              controls
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="closer"
        id="closer"
        title={texts.research_closer_head[lang]}
      >
        <ResearchSubSection text={texts.research_closer_exp[lang]} />
      </ResearchSection>

      <ResearchSection
        key="relbot"
        id="relbot"
        title={texts.research_relbot_head[lang]}
      >
        <ResearchSubSection text={texts.research_relbot_exp[lang]}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4"
              controls
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="travot"
        id="travot"
        title={texts.research_travot_head[lang]}
      >
        <ResearchSubSection text={texts.research_travot_exp[lang]}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4"
              controls
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ai" id="ai" title={texts.research_ai_head[lang]}>
        <ResearchSubSection text={texts.research_ai_exp[lang]}>
          <div className="flex justify-center">
            {lang === "ja" && (
              <img src="/res/research/scain_ja.png" alt="AI Research" />
            )}
            {lang !== "ja" && (
              <img src="/res/research/scain_en.png" alt="AI Research" />
            )}
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="si" id="si" title={texts.research_si_head[lang]}>
        <ResearchSubSection text={texts.research_si_exp[lang]}>
          <div className="flex justify-center">
            <img
              src="/res/research/context-situated.png"
              alt="Situated Interaction"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ad" id="ad" title={texts.research_ad_head[lang]}>
        <ResearchSubSection text={texts.research_ad_exp[lang]} />
      </ResearchSection>

      <ResearchSection key="iu" id="iu" title={texts.research_iu_head[lang]}>
        <ResearchSubSection text={texts.research_iu_exp[lang]}>
          <div className="flex justify-center">
            <img src="/res/research/iu.jpg" alt="Interactive Understanding" />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ui" id="ui" title={texts.research_ui_head[lang]}>
        <ResearchSubSection text={texts.research_ui_exp[lang]}>
          <div className="flex justify-center">
            <img src="/res/research/ui.png" alt="User Interface" />
          </div>
        </ResearchSubSection>
        {/*
        <ResearchSubSection text={texts.research_ui_exp2[lang]}>
          <div className='column has-text-centered'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/4doyLws0zC0?si=39YIJRieC8d1EIAX' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen />
          </div>
        </ResearchSubSection>
        */}
      </ResearchSection>

      <ResearchSection key="ag" id="ag" title={texts.research_ag_head[lang]}>
        <ResearchSubSection text={texts.research_ag_exp[lang]}>
          <div className="flex justify-center">
            <img src="/res/research/ag.png" alt="Agent Technology" />
          </div>
        </ResearchSubSection>
      </ResearchSection>
    </div>
  );
}
