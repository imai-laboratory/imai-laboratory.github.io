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
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("home.title")}
          </h1>
          <h2 className="text-xl">{t("home.message")}</h2>
        </div>
      </section>

      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="chap-title text-left text-white">
            {t("navigation.research")} {t("home.keywords")}:
          </h2>
          <div className="mb-4">
            <Link
              href="/research#research_section_ai"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.ai_short")}</strong>
            </Link>
            <Link
              href="/research#research_section_si"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.si_short")}</strong>
            </Link>
            <Link
              href="/research#research_section_ad"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.ad_head")}</strong>
            </Link>
            <Link
              href="/research#research_section_iu"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.iu_short")}</strong>
            </Link>
            <Link
              href="/research#research_section_ui"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.ui_head")}</strong>
            </Link>
            <Link
              href="/research#research_section_ag"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-2 px-4 rounded-lg transition-colors mr-2 mb-2 inline-block"
            >
              <strong>{t("research.ag_head")}</strong>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return <ContentHome t={t} />;
}
