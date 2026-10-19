import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/index.vue";
import ResearchPage from "./pages/research.vue";
import ResearchHaiPage from "./pages/research_hai.vue";
import ResearchHriPage from "./pages/research_hri.vue";
import ResearchCaPage from "./pages/research_ca.vue";
import ResearchAsPage from "./pages/research_as.vue";
import ResearchCnPage from "./pages/research_cn.vue";
import ResearchProjectPage from "./pages/research_proj.vue";
import MemberPage from "./pages/member.vue";
import PublicationPage from "./pages/publication.vue";
import PublicationJournalPage from "./pages/publication_journal.vue";
import PublicationInternationalPage from "./pages/publication_international.vue";
import PublicationDomesticPage from "./pages/publication_domestic.vue";
import ActivityPage from "./pages/activity.vue";
import ActivityAwardPage from "./pages/activity_award.vue";
import ActivityMediaPage from "./pages/activity_media.vue";
import ActivityTalkPage from "./pages/activity_talk.vue";
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
  { path: "/research_hai", component: ResearchHaiPage },
  { path: "/research_hri", component: ResearchHriPage },
  { path: "/research_ca", component: ResearchCaPage },
  { path: "/research_as", component: ResearchAsPage },
  { path: "/research_cn", component: ResearchCnPage },
  { path: "/research_proj", component: ResearchProjectPage },
  { path: "/member", component: MemberPage },
  { path: "/publication", component: PublicationPage },
  { path: "/publication_journal", component: PublicationJournalPage },
  { path: "/publication_international", component: PublicationInternationalPage },
  { path: "/publication_domestic", component: PublicationDomesticPage },
  { path: "/activity", component: ActivityPage },
  { path: "/activity_award", component: ActivityAwardPage },
  { path: "/activity_media", component: ActivityMediaPage },
  { path: "/activity_talk", component: ActivityTalkPage },
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
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});
router.beforeEach((to) => {
  const fallbackPath = typeof to.query.p === "string" ? to.query.p : "";
  if (fallbackPath) {
    const normalized = fallbackPath.startsWith("/") ? fallbackPath : `/${fallbackPath}`;
    if (normalized !== to.path)
      return { path: normalized, query: {}, hash: to.hash, replace: true };
  }
});
createApp(App).use(router).mount("#app");
