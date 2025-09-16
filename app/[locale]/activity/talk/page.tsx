import { getTranslations, setRequestLocale } from "next-intl/server";
import { ActivityList } from "@/components/features/ActivityList";
import { PageHero } from "@/components/features/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { getActivityData } from "@/lib/serverDataFetchers";

export { generateStaticParams };
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ActivityTalkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activities = await getActivityData("talk");
  const t = await getTranslations({ locale });

  return (
    <div>
      <PageHero title={t("activities.talk")} />
      <div className="container mx-auto px-6 py-8">
        <ActivityList activities={activities.filter(Boolean)} />
      </div>
    </div>
  );
}
