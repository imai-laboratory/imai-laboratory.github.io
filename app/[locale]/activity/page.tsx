import { getTranslations, setRequestLocale } from "next-intl/server";
import { ActivityList } from "@/components/features/ActivityList";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getActivityData } from "@/lib/serverDataFetchers";

export { generateStaticParams };
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ActivityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "activities" });
  const activities = await getActivityData("award");

  return (
    <div>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t("award")}</h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        <ActivityList activities={activities.filter(Boolean)} />
      </div>
    </div>
  );
}
