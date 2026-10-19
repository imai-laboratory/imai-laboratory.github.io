export interface NavChildDefinition {
  to: string
  labelKey: string
}

export interface NavItemDefinition {
  to: string
  labelKey: string
  children?: NavChildDefinition[]
}

/** Menu structure. Labels stay in texts_general.js so the menu remains translatable. */
export const NAVIGATION: NavItemDefinition[] = [
  { to: '/', labelKey: 'menu_home' },
  {
    to: '/research', labelKey: 'menu_research', children: [
      { to: '/research', labelKey: 'menu_research_theme' },
      { to: '/research_proj', labelKey: 'menu_research_proj' },
    ],
  },
  {
    to: '/publication_journal', labelKey: 'menu_publication', children: [
      { to: '/publication_journal', labelKey: 'menu_publication_journal' },
      { to: '/publication_international', labelKey: 'menu_publication_international' },
      { to: '/publication_domestic', labelKey: 'menu_publication_domestic' },
    ],
  },
  {
    to: '/activity_award', labelKey: 'menu_activity', children: [
      { to: '/activity_award', labelKey: 'menu_activity_award' },
      { to: '/activity_media', labelKey: 'menu_activity_media' },
      { to: '/activity_talk', labelKey: 'menu_activity_talk' },
    ],
  },
  { to: '/member', labelKey: 'menu_member' },
  { to: '/access', labelKey: 'menu_access' },
  { to: '/links', labelKey: 'menu_links' },
  { to: '/for_collaborations', labelKey: 'menu_for_collaborations' },
]
