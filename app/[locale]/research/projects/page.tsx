import { getTranslations, setRequestLocale } from "next-intl/server";
import { LinkCard } from "@/components/shared/LinkCard";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { RESEARCH_PROJECTS_CONSTANTS } from "./constants/researchProjectsData";

export { generateStaticParams };
export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchProjPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const projectKeys = Object.keys(
    RESEARCH_PROJECTS_CONSTANTS,
  ) as (keyof typeof RESEARCH_PROJECTS_CONSTANTS)[];

  return (
    <div id="content_links">
      <PageHero title={t("navigation.research.proj")} />
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectKeys.map((key) => {
            const projectData = t.raw(`researchProjects.${key}`);
            const constants = RESEARCH_PROJECTS_CONSTANTS[key];

            return (
              <LinkCard
                key={key}
                title={projectData.title}
                description={projectData.description}
                url={constants.url}
                buttonText={projectData.buttonText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
