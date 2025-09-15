import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
type ContentHomeProps = {
  t: (key: string) => string;
};

function ContentHome({ t }: ContentHomeProps) {
  return (
    <div id="content_home">
      <section className="bg-white py-16 md:py-24">
        <div className="py-8 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              {t("site.title")}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              {t("site.description")}
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-12 md:py-16">
        <div className="py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-left text-white mb-6">
              {t("research")}:
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/research#research_section_ai"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                AI研究
              </Link>
              <Link
                href="/research#research_section_si"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                状況インタラクション
              </Link>
              <Link
                href="/research#research_section_ad"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                対話研究
              </Link>
              <Link
                href="/research#research_section_iu"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                相互理解
              </Link>
              <Link
                href="/research#research_section_ui"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                UI研究
              </Link>
              <Link
                href="/research#research_section_ag"
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                エージェント技術
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "navigation" });

  return <ContentHome t={t} />;
}
