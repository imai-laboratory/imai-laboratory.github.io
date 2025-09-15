import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/fetchJson";
import { Activity, ActivityInfo } from "@/lib/types";

type UseActivityDataProps= {
  jsonBase: string;
  dataType: "award" | "media" | "talk";
}

export const useActivityData = ({ jsonBase, dataType }: UseActivityDataProps) => {
  const [activities, setActivities] = useState<ActivityInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const dataJsonExp = `${jsonBase}${dataType}/${dataType}_{yy}.json`;
  const yearsJson = `${jsonBase}${dataType}/${dataType}_years.json`;

  useEffect(() => {
    setLoading(true);

    fetchJson(yearsJson).then((years: unknown) => {
      const yearsArray = years as string[];
      if (!Array.isArray(yearsArray)) {
        setLoading(false);
        return;
      }

      setActivities(new Array(yearsArray.length));

      // Fetch activities for each year
      yearsArray.forEach((year, yearIdx) => {
        const url = dataJsonExp.replace("{yy}", year);
        fetchJson(url).then((activityData: unknown) => {
          const activitiesData = activityData as Activity[];
          setActivities((prevActivities) => {
            const newActivities = [...prevActivities];
            newActivities[yearIdx] = {
              year,
              activity: Array.isArray(activitiesData) ? activitiesData : []
            };
            return newActivities;
          });
        });
      });

      setLoading(false);
    });
  }, [dataJsonExp, yearsJson]);

  return { activities, loading };
};