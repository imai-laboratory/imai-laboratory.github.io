"use client";

import Link from "next/link";
import React from "react";
import { texts } from "@/lib/texts";

type ContentHomeProps = {
  texts?: any;
};

function ContentHome({ texts: propsTexts }: ContentHomeProps) {
  const currentTexts = propsTexts || texts;
  const lang = "ja";

  return (
    <div id="content_home">
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {currentTexts.home_imailab[lang]}
          </h1>
          <h2 className="text-xl">{currentTexts.home_message[lang]}</h2>
        </div>
      </section>

      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="chap-title text-left text-white">
            {currentTexts.menu_research[lang]}{" "}
            {currentTexts.home_keywords[lang]}:
          </h2>
          <div className="mb-4">
            <Link
              href="/research#research_section_ai"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_ai_short[lang]}</strong>
            </Link>
            <Link
              href="/research#research_section_si"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_si_short[lang]}</strong>
            </Link>
            <Link
              href="/research#research_section_ad"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_ad_head[lang]}</strong>
            </Link>
            <Link
              href="/research#research_section_iu"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_iu_short[lang]}</strong>
            </Link>
            <Link
              href="/research#research_section_ui"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_ui_head[lang]}</strong>
            </Link>
            <Link
              href="/research#research_section_ag"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{currentTexts.research_ag_head[lang]}</strong>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return <ContentHome />;
}
