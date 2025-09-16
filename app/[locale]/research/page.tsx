import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { ProjectRenderer } from "./_components/ProjectRenderer";
import { ThemeRenderer } from "./_components/ThemeRenderer";
import { RESEARCH_PROJECTS_CONSTANTS } from "./constants/researchData";

export { generateStaticParams };

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const tResearch = await getTranslations({ locale, namespace: "research" });

  const { projects, themes } = RESEARCH_PROJECTS_CONSTANTS;

  return (
    <div id="content_research">
      <PageHero
        title={t("navigation.research.theme")}
        backgroundImage="/res/hero/crsl_learning_brain.jpg"
      />

      {projects.map((project) => (
        <ProjectRenderer
          key={project.key}
          project={project}
          tResearch={tResearch}
        />
      ))}

      {themes.map((theme) => (
        <ThemeRenderer
          key={theme.key}
          theme={theme}
          locale={locale}
          tResearch={tResearch}
        />
      ))}
    </div>
  );
}
