"use client";

import React from "react";
import { texts } from "@/lib/texts";
import { useActivityData } from "@/hooks/useActivityData";
import { ActivityList } from "@/components/shared/ActivityList";

const JsonBase =
  "https://raw.githubusercontent.com/imai-laboratory/activities_data/master/";

export default function ActivityPage() {
  const { activities, loading } = useActivityData({
    jsonBase: JsonBase,
    dataType: "award",
  });
  const lang: "en" | "ja" = "ja";

  return (
    <div>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            {texts.activity_award_head[lang]}
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ActivityList activities={activities} />
        )}
      </div>
    </div>
  );
}
