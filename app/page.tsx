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
      <section className="bg-white py-16 md:py-24">
        <div className="py-8 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              {currentTexts.home_imailab[lang]}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              {currentTexts.home_message[lang]}
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-12 md:py-16">
        <div className="py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-left text-white mb-6">
              {currentTexts.menu_research[lang]}{" "}
              {currentTexts.home_keywords[lang]}:
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/research#research_section_ai"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_ai_short[lang]}
              </Link>
              <Link
                href="/research#research_section_si"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_si_short[lang]}
              </Link>
              <Link
                href="/research#research_section_ad"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_ad_head[lang]}
              </Link>
              <Link
                href="/research#research_section_iu"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_iu_short[lang]}
              </Link>
              <Link
                href="/research#research_section_ui"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_ui_head[lang]}
              </Link>
              <Link
                href="/research#research_section_ag"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {currentTexts.research_ag_head[lang]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return <ContentHome />;
}
