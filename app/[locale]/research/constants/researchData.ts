export const RESEARCH_PROJECTS_CONSTANTS = {
  projects: [
    {
      key: "isc",
      type: "single",
      video:
        "https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4",
      descKey: "desc",
    },
    {
      key: "scains",
      type: "multi",
      videos: [
        "https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4",
        "https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4",
      ],
      descKeys: ["desc1", "desc2"],
    },
    {
      key: "closer",
      type: "text-only",
      descKey: "desc",
    },
    {
      key: "relbot",
      type: "single",
      video:
        "https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4",
      descKey: "desc",
    },
    {
      key: "travot",
      type: "single",
      video:
        "https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4",
      descKey: "desc",
    },
  ],
  themes: [
    {
      key: "ai",
      type: "localized-image",
      images: {
        ja: "/res/research/scain_ja.png",
        en: "/res/research/scain_en.png",
      },
      descKey: "desc",
    },
    {
      key: "si",
      type: "image",
      image: "/res/research/context-situated.png",
      descKey: "desc",
    },
    {
      key: "ad",
      type: "text-only",
      descKey: "desc",
    },
    {
      key: "iu",
      type: "image",
      image: "/res/research/iu.jpg",
      descKey: "desc",
    },
    {
      key: "ui",
      type: "image",
      image: "/res/research/ui.png",
      descKey: "desc",
    },
    {
      key: "ag",
      type: "image",
      image: "/res/research/ag.png",
      descKey: "desc",
    },
  ],
} as const;
