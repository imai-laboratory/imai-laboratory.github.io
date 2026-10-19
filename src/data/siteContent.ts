export const PAGE_TITLE_KEYS: Record<string, string> = {
  '/research': 'menu_research_theme',
  '/research_hai': 'menu_research_hai',
  '/research_hri': 'menu_research_hri',
  '/research_ca': 'menu_research_ca',
  '/research_as': 'menu_research_as',
  '/research_cn': 'menu_research_cn',
  '/research_proj': 'menu_research_proj',
  '/member': 'members_head',
  '/publication': 'publication_journal_head',
  '/publication_journal': 'publication_journal_head',
  '/publication_international': 'publication_international_head',
  '/publication_domestic': 'publication_domestic_head',
  '/activity': 'activity_award_head',
  '/activity_award': 'activity_award_head',
  '/activity_media': 'activity_media_head',
  '/activity_talk': 'activity_talk_head',
  '/access': 'menu_access',
  '/links': 'links_head',
  '/for_collaborations': 'menu_for_collaborations',
  '/b3': 'menu_b3',
}

export const RESEARCH_KEYS = ['relbot', 'travot', 'ag', 'isc', 'scains', 'closer', 'ai', 'si', 'ad', 'iu', 'ui']

export const RESEARCH_SUBPAGES: Record<string, string> = {
  hai: 'hai', hri: 'hri', ca: 'ca', as: 'as', cn: 'cn',
}

export const RESEARCH_ASSETS: Record<string, string> = {
  ag: '/res/research/ag.png',
  si: '/res/research/context-situated.png',
  iu: '/res/research/iu.jpg',
  ui: '/res/research/ui.png',
}

export const RESEARCH_VIDEOS: Record<string, string> = {
  relbot: 'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4',
  travot: 'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4',
  isc: 'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4',
  scains: 'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4',
}

export const LINKS = [
  { title: 'Imai Laboratory - GitHub', url: 'https://github.com/imai-laboratory' },
  { title: '計算理論2017 - お魚天国', url: 'http://osakana.ailab.ics.keio.ac.jp' },
  { title: '『心と脳－認知科学入門』コメント・参考文献', url: 'http://www.ayu.ics.keio.ac.jp/references/cognitivescience/' },
  { title: 'Cognitive Robot Interaction 参考文献', url: 'http://www.ailab.ics.keio.ac.jp/webpage_personal/cognitive_robot_interaction/' },
]

export const PROJECTS = [
  { titleKey: 'research_proj_crest', descKey: 'research_proj_crest_desc', url: 'http://crest.ailab.ics.keio.ac.jp/context/' },
  { titleKey: 'research_proj_sip', descKey: 'research_proj_sip_desc', url: 'https://www.nedo.go.jp/activities/ZZJP2_100126.html' },
  { titleKey: 'research_proj_agv', descKey: '', url: 'https://agventurelab.or.jp/' },
]
