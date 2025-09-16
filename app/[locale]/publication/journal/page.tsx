import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/features/PageHero";
import { PublicationList } from "@/components/features/PublicationList";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getPublicationData } from "@/lib/serverDataFetchers";

export { generateStaticParams };
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PublicationJournalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const papers = await getPublicationData("journal");
  const t = await getTranslations({ locale });

  return (
    <div>
      <PageHero title={t("publications.journal")} />
      <div className="container mx-auto px-6 py-8">
        <PublicationList
          papers={papers.filter(Boolean)}
          lang={locale as "en" | "ja"}
        />
      </div>
    </div>
  );
}
