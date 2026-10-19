import type { MemberGroup, PastMemberGroup, YearGroup } from "../types/content";

const cache = new Map<string, unknown>();

async function fetchJson<T>(url: string): Promise<T> {
  if (cache.has(url)) return cache.get(url) as T;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const result = (await response.json()) as T;
  cache.set(url, result);
  return result;
}

export async function loadMembers() {
  const base = "https://raw.githubusercontent.com/imai-laboratory/members_data/master/";
  const [members, pastMembers] = await Promise.all([
    fetchJson<MemberGroup[]>(`${base}members.json`),
    fetchJson<PastMemberGroup[]>(`${base}past_members.json`),
  ]);
  return { members, pastMembers };
}

export async function loadYearly<T>(base: string, type: string): Promise<YearGroup<T>[]> {
  const years = await fetchJson<string[]>(`${base}${type}/${type}_years.json`);
  return Promise.all(
    years.map(async (year) => ({
      year,
      items: await fetchJson<T[]>(`${base}${type}/${type}_${year}.json`).catch(() => []),
    })),
  );
}

export const PUBLICATIONS_BASE =
  "https://raw.githubusercontent.com/imai-laboratory/publications_data/master/";
export const ACTIVITIES_BASE =
  "https://raw.githubusercontent.com/imai-laboratory/activities_data/master/";
