import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { AboutSection } from "./_components/AboutSection";
import { ContactSection } from "./_components/ContactSection";
import { ExamplesSection } from "./_components/ExamplesSection";

export { generateStaticParams };
type Props = { params: Promise<{ locale: string }> };

export default async function ForCollaborationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return (
    <div id="content_for_collaborations">
      <PageHero
        title={t("navigation.for_collaborations")}
        icon="🤝"
        subtitle={t("for_collaborations.subtitle")}
      />

      <AboutSection titleKey="for_collaborations.about.title" />

      <ExamplesSection
        title={t("for_collaborations.examples.title")}
        description={t("for_collaborations.examples.desc")}
      />

      <ContactSection titleKey="for_collaborations.contact.title" />
    </div>
  );
}
