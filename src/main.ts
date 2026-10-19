import { createApp, nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/index.vue";
import ResearchPage from "./pages/research/index.vue";
import ResearchCategoryPage from "./pages/research/[category].vue";
import ResearchProjectsPage from "./pages/research/projects.vue";
import MemberPage from "./pages/member.vue";
import PublicationPage from "./pages/publication/index.vue";
import PublicationKindPage from "./pages/publication/[kind].vue";
import ActivityPage from "./pages/activity/index.vue";
import ActivityKindPage from "./pages/activity/[kind].vue";
import AccessPage from "./pages/access.vue";
import LinksPage from "./pages/links.vue";
import CollaborationsPage from "./pages/for_collaborations.vue";
import B3Page from "./pages/b3.vue";
import NotFoundPage from "./pages/not-found.vue";
import "./styles.css";

const routes = [
  { path: "/", component: HomePage },
  { path: "/home", redirect: "/" },
  { path: "/research", component: ResearchPage },
  { path: "/research/:category(hai|hri|ca|as|cn)", component: ResearchCategoryPage },
  { path: "/research/projects", component: ResearchProjectsPage },
  { path: "/research_hai", redirect: "/research/hai" },
  { path: "/research_hri", redirect: "/research/hri" },
  { path: "/research_ca", redirect: "/research/ca" },
  { path: "/research_as", redirect: "/research/as" },
  { path: "/research_cn", redirect: "/research/cn" },
  { path: "/research_proj", redirect: "/research/projects" },
  { path: "/member", component: MemberPage },
  { path: "/publication", component: PublicationPage },
  { path: "/publication/:kind(journal|international|domestic)", component: PublicationKindPage },
  { path: "/publication_journal", redirect: "/publication/journal" },
  { path: "/publication_international", redirect: "/publication/international" },
  { path: "/publication_domestic", redirect: "/publication/domestic" },
  { path: "/activity", component: ActivityPage },
  { path: "/activity/:kind(award|media|talk)", component: ActivityKindPage },
  { path: "/activity_award", redirect: "/activity/award" },
  { path: "/activity_media", redirect: "/activity/media" },
  { path: "/activity_talk", redirect: "/activity/talk" },
  { path: "/access", component: AccessPage },
  { path: "/links", component: LinksPage },
  { path: "/for_collaborations", component: CollaborationsPage },
  { path: "/b3", component: B3Page },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) {
      return nextTick().then(() => ({
        el: to.hash,
        top: 0,
        behavior: "smooth",
      }));
    }

    return {
      top: 0,
    };
  },
});
router.beforeEach((to) => {
  const fallbackPath = typeof to.query.p === "string" ? to.query.p : "";
  if (fallbackPath) {
    const normalized = fallbackPath.startsWith("/") ? fallbackPath : `/${fallbackPath}`;
    if (normalized !== to.path)
      return {
        path: normalized,
        query: {},
        hash: to.hash,
        replace: true,
      };
  }
});
createApp(App).use(router).mount("#app");
