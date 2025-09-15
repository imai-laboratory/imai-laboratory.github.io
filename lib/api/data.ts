import type { Member, ResearchArea, SiteConfig } from "@/lib/types";

const DATA_BASE_URL = "/data";

export class DataAPI {
  private static async fetchJSON<T>(path: string): Promise<T> {
    const response = await fetch(`${DATA_BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    return response.json();
  }

  static async getSiteConfig(): Promise<SiteConfig> {
    return DataAPI.fetchJSON<SiteConfig>("/content/site-config.json");
  }

  static async getResearchAreas(): Promise<ResearchArea[]> {
    return DataAPI.fetchJSON<ResearchArea[]>("/research/research-areas.json");
  }

  static async getMembers(): Promise<Member[]> {
    return DataAPI.fetchJSON<Member[]>("/members/members.json");
  }
}

// Next.jsのstatic generation対応（サーバーサイド専用）
export async function getStaticSiteConfig(): Promise<SiteConfig> {
  if (typeof window !== "undefined") {
    // クライアントサイドでは fetch を使用
    return DataAPI.getSiteConfig();
  }

  const fs = await import("fs");
  const path = await import("path");

  const filePath = path.join(process.cwd(), "data/content/site-config.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function getStaticResearchAreas(): Promise<ResearchArea[]> {
  if (typeof window !== "undefined") {
    return DataAPI.getResearchAreas();
  }

  const fs = await import("fs");
  const path = await import("path");

  const filePath = path.join(
    process.cwd(),
    "data/research/research-areas.json",
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function getStaticMembers(): Promise<Member[]> {
  if (typeof window !== "undefined") {
    return DataAPI.getMembers();
  }

  const fs = await import("fs");
  const path = await import("path");

  const filePath = path.join(process.cwd(), "data/members/members.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}
