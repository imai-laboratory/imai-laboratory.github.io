import { fetchJson } from "@/lib/fetchJson";
import type { ActivityInfo, PaperInfo } from "@/lib/types";

const ActivityJsonBase =
  "https://raw.githubusercontent.com/imai-laboratory/activities_data/master/";
const PublicationJsonBase =
  "https://raw.githubusercontent.com/imai-laboratory/publications_data/master/";

export const getActivityData = async (
  dataType: "award" | "media" | "talk",
): Promise<ActivityInfo[]> => {
  const yearsJson = `${ActivityJsonBase}${dataType}/${dataType}_years.json`;
  const years = (await fetchJson(yearsJson)) as string[];

  if (!Array.isArray(years)) return [];

  return await Promise.all(
    years.map(async (year) => {
      const url = `${ActivityJsonBase}${dataType}/${dataType}_${year}.json`;
      const activityData = await fetchJson(url);
      return {
        year,
        activity: Array.isArray(activityData) ? activityData : [],
      };
    }),
  );
};

export const getPublicationData = async (
  dataType: "journal" | "international" | "domestic",
): Promise<PaperInfo[]> => {
  const yearsJson = `${PublicationJsonBase}${dataType}/${dataType}_years.json`;
  const years = (await fetchJson(yearsJson)) as string[];

  if (!Array.isArray(years)) return [];

  return await Promise.all(
    years.map(async (year) => {
      const url = `${PublicationJsonBase}${dataType}/${dataType}_${year}.json`;
      const paperData = await fetchJson(url);
      return {
        year,
        paper: Array.isArray(paperData) ? paperData : [],
      };
    }),
  );
};
