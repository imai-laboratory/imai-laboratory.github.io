import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { HeroSection } from "./_components/HeroSection";
import { KeywordsSection } from "./_components/KeywordsSection";

export { generateStaticParams };
type ContentHomeProps = {
  t: (key: string) => string;
  locale: string;
};

function ContentHome({ t, locale }: ContentHomeProps) {
  const keywordData = [
    {
      id: "ai",
      title: t("research.themes.ai.title"),
      href: `/${locale}/research#research_section_ai`,
      icon: "🤖",
      gradient: "rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8)",
    },
    {
      id: "si",
      title: t("research.themes.si.title"),
      href: `/${locale}/research#research_section_si`,
      icon: "🎯",
      gradient: "rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.8)",
    },
    {
      id: "ad",
      title: t("research.themes.ad.title"),
      href: `/${locale}/research#research_section_ad`,
      icon: "💬",
      gradient: "rgba(245, 158, 11, 0.8), rgba(239, 68, 68, 0.8)",
    },
    {
      id: "iu",
      title: t("research.themes.iu.title"),
      href: `/${locale}/research#research_section_iu`,
      icon: "🧠",
      gradient: "rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8)",
    },
    {
      id: "ui",
      title: t("research.themes.ui.title"),
      href: `/${locale}/research#research_section_ui`,
      icon: "⚡",
      gradient: "rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8)",
    },
    {
      id: "ag",
      title: t("research.themes.ag.title"),
      href: `/${locale}/research#research_section_ag`,
      icon: "🚀",
      gradient: "rgba(239, 68, 68, 0.8), rgba(245, 158, 11, 0.8)",
    },
  ];

  return (
    <div id="content_home">
      <HeroSection
        title={t("home.title")}
        message={t("home.message")}
        exploreResearch={t("home.exploreResearch")}
        viewMembers={t("home.viewMembers")}
        locale={locale}
      />
      <KeywordsSection
        keywords={t("home.keywords")}
        keywordData={keywordData}
      />
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
