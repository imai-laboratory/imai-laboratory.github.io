import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getActivityData } from "@/lib/serverDataFetchers";
import { ActivityList } from "../_components/ActivityList";

export { generateStaticParams };

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ActivityMediaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activities = await getActivityData("media");
  const t = await getTranslations({ locale });

  return (
    <div>
      <PageHero title={t("activities.media")} />
      <div className="container mx-auto px-6 py-8">
        <ActivityList activities={activities.filter(Boolean)} />
      </div>
    </div>
  );
}
