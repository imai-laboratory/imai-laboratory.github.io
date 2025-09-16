import { fetchJson } from "@/lib/fetchJson";
import type { ActivityInfo, PaperInfo } from "@/types";

// 外部データリポジトリのベースURL
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/imai-laboratory";
const BRANCH = "master";

const ActivityJsonBase = `${GITHUB_RAW_BASE}/activities_data/${BRANCH}/`;
const PublicationJsonBase = `${GITHUB_RAW_BASE}/publications_data/${BRANCH}/`;
const MembersJsonBase = `${GITHUB_RAW_BASE}/members_data/${BRANCH}/`;

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

export type Member = {
  name: { [key: string]: string };
  grade: { [key: string]: string };
  email: string;
  option?: string;
  img: string;
};

export type MemberInfo = {
  role: { [key: string]: string };
  members: Member[];
};

export type PastMember = {
  name: { [key: string]: string };
  grade: string;
};

export type PastMemberInfo = {
  year: string;
  members: PastMember[];
};

export const getMembersData = async (): Promise<MemberInfo[]> => {
  const membersJson = `${MembersJsonBase}members.json`;
  const data = await fetchJson(membersJson);
  return Array.isArray(data) ? data : [];
};

export const getPastMembersData = async (): Promise<PastMemberInfo[]> => {
  const pastMembersJson = `${MembersJsonBase}past_members.json`;
  const data = await fetchJson(pastMembersJson);
  return Array.isArray(data) ? data : [];
};

export const getMemberImageUrl = (filename: string) => {
  return `${MembersJsonBase}imgs/${filename}`;
};
