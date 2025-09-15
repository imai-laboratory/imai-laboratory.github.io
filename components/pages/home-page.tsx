import Link from "next/link";
import { texts } from "@/lib/texts";
import type { Language } from "@/lib/types";

type HomePageProps = {
  language?: Language;
};

export function HomePage({ language = "ja" }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {texts.home_imailab[language]}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {texts.home_message[language]}
          </p>
        </div>
      </section>

      {/* Research Keywords Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {texts.menu_research[language]} {texts.home_keywords[language]}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/research#research_section_ai"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_ai_short[language]}
            </Link>
            <Link
              href="/research#research_section_si"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_si_short[language]}
            </Link>
            <Link
              href="/research#research_section_ad"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_ad_head[language]}
            </Link>
            <Link
              href="/research#research_section_iu"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_iu_short[language]}
            </Link>
            <Link
              href="/research#research_section_ui"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_ui_head[language]}
            </Link>
            <Link
              href="/research#research_section_ag"
              className="bg-primary-400 hover:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {texts.research_ag_head[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/research/projects"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  🔬
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {texts.menu_research_proj[language]}
                </h3>
                <p className="text-gray-600">
                  Interactive-SmartClerk, SCAINs, CLOZER などの研究プロジェクト
                </p>
              </div>
            </Link>

            <Link
              href="/publications"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-center">
                <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  📚
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {texts.menu_publication[language]}
                </h3>
                <p className="text-gray-600">研究室の論文・業績一覧</p>
              </div>
            </Link>

            <Link
              href="/members"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  👥
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {texts.menu_member[language]}
                </h3>
                <p className="text-gray-600">教員・学生メンバー紹介</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
