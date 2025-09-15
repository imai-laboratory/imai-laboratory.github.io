import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";
import { ActivityList } from "@/components/shared/ActivityList";
import { fetchJson } from "@/lib/fetchJson";
import { generateStaticParams } from "@/lib/generateStaticParams";
import type { ActivityInfo } from "@/lib/types";

export { generateStaticParams };
const JsonBase =
  "https://raw.githubusercontent.com/imai-laboratory/activities_data/master/";

async function getActivities(): Promise<ActivityInfo[]> {
  const yearsJson = `${JsonBase}award/award_years.json`;
  const years = (await fetchJson(yearsJson)) as string[];

  if (!Array.isArray(years)) return [];

  return await Promise.all(
    years.map(async (year, yearIdx) => {
      const url = `${JsonBase}award/award_${year}.json`;
      const activityData = await fetchJson(url);
      return {
        year,
        activity: Array.isArray(activityData) ? activityData : [],
      };
    }),
  );
}

type Props = { params: Promise<{ locale: string }> };

export default async function ActivityAwardPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "activities" });
  const activities = await getActivities();

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
