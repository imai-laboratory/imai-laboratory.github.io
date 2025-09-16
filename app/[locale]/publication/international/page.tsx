import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getPublicationData } from "@/lib/serverDataFetchers";
import { PublicationList } from "../_components/PublicationList";

export { generateStaticParams };
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PublicationInternationalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const papers = await getPublicationData("international");
  const t = await getTranslations({ locale });

  return (
    <div>
      <PageHero title={t("publications.international")} />
      <div className="container mx-auto px-6 py-8">
        <PublicationList
          papers={papers.filter(Boolean)}
          lang={locale as "en" | "ja"}
        />
      </div>
    </div>
  );
}
