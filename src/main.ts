import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import ContentPage from './pages/ContentPage.vue'
import './styles.css'

const routes = [
  { path: '/', component: HomePage },
  { path: '/home', redirect: '/' },
  ...[
    '/research','/research_hai','/research_hri','/research_ca','/research_as','/research_cn',
    '/research_proj','/member','/publication','/publication_journal','/publication_international',
    '/publication_domestic','/activity','/activity_award','/activity_media','/activity_talk',
    '/access','/links','/for_collaborations','/b3',
  ].map(path => ({ path, component: ContentPage })),
  { path: '/:pathMatch(.*)*', component: ContentPage },
]
const router = createRouter({ history: createWebHistory(), routes, scrollBehavior(to, from, saved) {
  if (saved) return saved
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return { top: 0 }
} })
router.beforeEach((to) => {
  const fallbackPath = typeof to.query.p === 'string' ? to.query.p : ''
  if (fallbackPath) {
    const normalized = fallbackPath.startsWith('/') ? fallbackPath : `/${fallbackPath}`
    if (normalized !== to.path) return { path: normalized, query: {}, hash: to.hash, replace: true }
  }
})
createApp(App).use(router).mount('#app')
