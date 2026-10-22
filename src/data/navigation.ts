export interface NavChildDefinition {
  to: string;
  labelKey: string;
}

export interface NavItemDefinition {
  to: string;
  labelKey: string;
  children?: NavChildDefinition[];
}

/** メニュー構造。表示文言は翻訳できるようtexts_general.jsで管理する。 */
export const NAVIGATION: NavItemDefinition[] = [
  { to: "/", labelKey: "menu_home" },
  {
    to: "/research",
    labelKey: "menu_research",
    children: [
      { to: "/research", labelKey: "menu_research_theme" },
      { to: "/research/projects", labelKey: "menu_research_proj" },
    ],
  },
  {
    to: "/publication/journal",
    labelKey: "menu_publication",
    children: [
      { to: "/publication/journal", labelKey: "menu_publication_journal" },
      { to: "/publication/international", labelKey: "menu_publication_international" },
      { to: "/publication/domestic", labelKey: "menu_publication_domestic" },
    ],
  },
  {
    to: "/activity/award",
    labelKey: "menu_activity",
    children: [
      { to: "/activity/award", labelKey: "menu_activity_award" },
      { to: "/activity/media", labelKey: "menu_activity_media" },
      { to: "/activity/talk", labelKey: "menu_activity_talk" },
    ],
  },
  { to: "/member", labelKey: "menu_member" },
  { to: "/access", labelKey: "menu_access" },
  { to: "/links", labelKey: "menu_links" },
  { to: "/for_collaborations", labelKey: "menu_for_collaborations" },
];
