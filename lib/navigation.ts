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
    key: "research.main",
    children: [
      {
        key: "research.theme",
        href: "/research",
      },
      {
        key: "research.proj",
        href: "/research/projects",
        indented: true,
      },
    ],
  },
  {
    key: "publication.main",
    children: [
      {
        key: "publication.journal",
        href: "/publication/journal",
        indented: true,
      },
      {
        key: "publication.international",
        href: "/publication/international",
        indented: true,
      },
      {
        key: "publication.domestic",
        href: "/publication/domestic",
        indented: true,
      },
    ],
  },
  {
    key: "activity.main",
    children: [
      {
        key: "activity.award",
        href: "/activity/award",
        indented: true,
      },
      {
        key: "activity.media",
        href: "/activity/media",
        indented: true,
      },
      {
        key: "activity.talk",
        href: "/activity/talk",
        indented: true,
      },
    ],
  },
  {
    key: "member",
    href: "/member",
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
