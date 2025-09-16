import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
type ContentHomeProps = {
  t: (key: string) => string;
  locale: string;
};

function ContentHome({ t, locale }: ContentHomeProps) {
  return (
    <div id="content_home">
      <section className="bg-white py-16 md:py-24">
        <div className="py-8 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              {t("home.title")}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              {t("home.message")}
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-12 md:py-16">
        <div className="py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-left text-white mb-6">
              {t("home.keywords")}:
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/research#research_section_ai`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.ai.title")}
              </Link>
              <Link
                href={`/${locale}/research#research_section_si`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.si.title")}
              </Link>
              <Link
                href={`/${locale}/research#research_section_ad`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.ad.title")}
              </Link>
              <Link
                href={`/${locale}/research#research_section_iu`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.iu.title")}
              </Link>
              <Link
                href={`/${locale}/research#research_section_ui`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.ui.title")}
              </Link>
              <Link
                href={`/${locale}/research#research_section_ag`}
                className="inline-block bg-primary-300 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded font-semibold transition-colors"
              >
                {t("research.themes.ag.title")}
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
  const t = await getTranslations({ locale });

  return <ContentHome t={t} locale={locale} />;
}
