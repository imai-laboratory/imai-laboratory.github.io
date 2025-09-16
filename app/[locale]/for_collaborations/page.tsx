import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
type Props = { params: Promise<{ locale: string }> };

export default async function ForCollaborationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div>
      <div id="content_for_collaborations">
        <PageHero title={t("navigation.for_collaborations")} />

        {/* About Section */}
        <ContentSection title={t("for_collaborations.about.title")} />

        {/* Examples Section */}
        <ContentSection title={t("for_collaborations.examples.title")}>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t("for_collaborations.examples.desc")
              .split("\n")
              .filter((line) => line.trim())
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </ContentSection>

        {/* Contact Section */}
        <ContentSection title={t("for_collaborations.contact.title")}>
          <div className="text-gray-700 whitespace-pre-line">
            {t("for_collaborations.contact.desc")}
          </div>
        </ContentSection>
      </div>
    </div>
  );
}
