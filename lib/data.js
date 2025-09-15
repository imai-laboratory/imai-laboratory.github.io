// Data fetching utilities for external repositories
const MEMBERS_BASE =
  "https://raw.githubusercontent.com/imai-laboratory/members_data/master/";
const PUBLICATIONS_BASE =
  "https://raw.githubusercontent.com/imai-laboratory/publications_data/master/";

export async function fetchJson(url) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export async function getMembersData() {
  const [members, pastMembers] = await Promise.all([
    fetchJson(`${MEMBERS_BASE}members.json`),
    fetchJson(`${MEMBERS_BASE}past_members.json`),
  ]);

  return { members, pastMembers };
}

export async function getPublicationsData() {
  const [journalYears, internationalYears, domesticYears] = await Promise.all([
    fetchJson(`${PUBLICATIONS_BASE}journal/journal_years.json`),
    fetchJson(`${PUBLICATIONS_BASE}international/international_years.json`),
    fetchJson(`${PUBLICATIONS_BASE}domestic/domestic_years.json`),
  ]);

  const allPublications = await Promise.all([
    ...(journalYears?.map((year) =>
      fetchJson(`${PUBLICATIONS_BASE}journal/journal_${year}.json`).then(
        (papers) => ({ year, type: "journal", papers }),
      ),
    ) || []),
    ...(internationalYears?.map((year) =>
      fetchJson(
        `${PUBLICATIONS_BASE}international/international_${year}.json`,
      ).then((papers) => ({ year, type: "international", papers })),
    ) || []),
    ...(domesticYears?.map((year) =>
      fetchJson(`${PUBLICATIONS_BASE}domestic/domestic_${year}.json`).then(
        (papers) => ({ year, type: "domestic", papers }),
      ),
    ) || []),
  ]);

  return {
    journal: allPublications.filter((p) => p?.type === "journal"),
    international: allPublications.filter((p) => p?.type === "international"),
    domestic: allPublications.filter((p) => p?.type === "domestic"),
  };
}
