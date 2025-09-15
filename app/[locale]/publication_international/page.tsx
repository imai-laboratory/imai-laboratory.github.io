import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";
import { PublicationList } from "@/components/shared/PublicationList";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getPublicationData } from "@/lib/serverDataFetchers";

export { generateStaticParams };
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PublicationInternationalPage({
  params: { locale },
}: Props) {
  const papers = await getPublicationData("international");
  const t = await getTranslations({ locale });

  return (
    <div>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("publications.international")}
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        <PublicationList
          papers={papers.filter(Boolean)}
          lang={locale as "en" | "ja"}
        />
      </div>
    </div>
  );
}
