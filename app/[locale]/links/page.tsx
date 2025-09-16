import { getTranslations, setRequestLocale } from "next-intl/server";
import { LinkCard } from "@/components/shared/LinkCard";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { LINKS_CONSTANTS } from "./constants/linksData";

export { generateStaticParams };

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LinksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const linksKeys = Object.keys(
    LINKS_CONSTANTS,
  ) as (keyof typeof LINKS_CONSTANTS)[];

  return (
    <div id="content_links">
      <PageHero title={t("navigation.links")} />
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {linksKeys.map((key) => {
            const linkData = t.raw(`links.${key}`);
            const constants = LINKS_CONSTANTS[key];

            return (
              <LinkCard
                key={key}
                title={linkData.title}
                description={linkData.description}
                url={constants.url}
                buttonText={linkData.buttonText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
