export type NavigationItem = {
  key: string;
  href?: string;
  children?: NavigationItem[];
  indented?: boolean;
};

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "research",
    children: [
      {
        key: "research_theme",
        href: "/research",
      },
      {
        key: "research_proj",
        href: "/research/projects",
        indented: true,
      },
    ],
  },
  {
    key: "member",
    href: "/member",
  },
  {
    key: "publication",
    children: [
      {
        key: "publication_journal",
        href: "/publication/journal",
        indented: true,
      },
      {
        key: "publication_international",
        href: "/publication/international",
        indented: true,
      },
      {
        key: "publication_domestic",
        href: "/publication/domestic",
        indented: true,
      },
    ],
  },
  {
    key: "activity",
    children: [
      {
        key: "activity_award",
        href: "/activity/award",
        indented: true,
      },
      {
        key: "activity_media",
        href: "/activity/media",
        indented: true,
      },
      {
        key: "activity_talk",
        href: "/activity/talk",
        indented: true,
      },
    ],
  },
  {
    key: "access",
    href: "/access",
  },
  {
    key: "links",
    href: "/links",
  },
  {
    key: "for_collaborations",
    href: "/for_collaborations",
  },
];

export const externalLinks = [
  {
    key: "b3",
    href: "https://www.ailab.ics.keio.ac.jp/welcome-junior/",
    variant: "primary" as const,
    size: "sm" as const,
  },
  {
    key: "twitter",
    href: "https://twitter.com/imailab",
    variant: "secondary" as const,
    size: "md" as const,
  },
];
