<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { lang, texts } from "../state";
import {
  PAGE_TITLE_KEYS,
  PROJECTS,
  RESEARCH_ASSETS,
  RESEARCH_KEYS,
  RESEARCH_SUBPAGES,
  RESEARCH_VIDEOS,
  LINKS,
} from "../data/siteContent";
import { useRemoteContent } from "../composables/useRemoteContent";
import ResearchSections from "../components/ResearchSections.vue";
import MemberList from "../components/MemberList.vue";
import PublicationList from "../components/PublicationList.vue";
import ActivityList from "../components/ActivityList.vue";

const route = useRoute();
const t = (key: string) => texts.value[key] ?? key;
const path = computed(() => route.path.replace(/\/+$/, "") || "/");
const title = computed(() => t(PAGE_TITLE_KEYS[path.value] || "404 Not Found"));
const researchKeys = computed(() => {
  if (path.value === "/research") return RESEARCH_KEYS;
  const sub = path.value.replace("/research_", "");
  return RESEARCH_SUBPAGES[sub] ? [RESEARCH_SUBPAGES[sub]] : [];
});
const { memberGroups, pastGroups, years, loading, errorMessage, refresh } = useRemoteContent(
  path,
  lang,
);
const links = LINKS;
const researchAssets = computed<Record<string, string>>(() => ({
  ...RESEARCH_ASSETS,
  ai: lang.value === "ja" ? "/res/research/scain_ja.png" : "/res/research/scain_en.png",
}));
const videos = RESEARCH_VIDEOS;
const projects = computed(() =>
  PROJECTS.filter((project) => project.titleKey !== "research_proj_agv" || lang.value === "ja").map(
    (project) => ({
      title: t(project.titleKey),
      desc: project.descKey ? t(project.descKey) : "",
      url: project.url,
    }),
  ),
);
</script>

<template>
  <section v-if="PAGE_TITLE_KEYS[path]" class="page-hero">
    <div class="hero-content">
      <p class="eyebrow">IMAI LABORATORY</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
  <ResearchSections
    v-if="path === '/research'"
    :research-keys="researchKeys"
    :research-assets="researchAssets"
    :videos="videos"
    :translate="t"
  />
  <section
    v-else-if="path.startsWith('/research_') && path !== '/research_proj'"
    class="section-wrap content-stack"
  >
    <div v-for="key in researchKeys" :key="key" class="glass-card research-content">
      <img v-if="researchAssets[key]" :src="researchAssets[key]" :alt="t(`research_${key}_head`)" />
      <div>
        <h2>{{ t(`research_${key}_head`) }}</h2>
        <p>{{ t(`research_${key}_exp`) }}</p>
      </div>
    </div>
  </section>
  <section v-else-if="path === '/research_proj'" class="section-wrap card-list">
    <article v-for="project in projects" :key="project.title" class="glass-card info-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.desc }}</p>
      <a class="button button-primary" :href="project.url" target="_blank" rel="noreferrer"
        >here ↗</a
      >
    </article>
  </section>
  <MemberList
    v-else-if="path === '/member'"
    :language="lang"
    :groups="memberGroups"
    :past-groups="pastGroups"
    :loading="loading"
    :error-message="errorMessage"
    :translate="t"
    :refresh="refresh"
  />
  <PublicationList
    v-else-if="path.startsWith('/publication')"
    :language="lang"
    :years="years"
    :loading="loading"
    :error-message="errorMessage"
  />
  <ActivityList
    v-else-if="path.startsWith('/activity')"
    :language="lang"
    :years="years"
    :loading="loading"
    :error-message="errorMessage"
  />
  <section v-else-if="path === '/access'" class="section-wrap access-layout">
    <div class="glass-card access-copy">
      <p>{{ t("access_location_exp") }}</p>
      <p class="multiline">{{ t("access_address") }}</p>
      <p class="multiline">{{ t("access_rooms") }}</p>
      <p class="multiline">{{ t("access_tel") }}</p>
      <a
        class="button button-primary"
        href="https://www.keio.ac.jp/ja/maps/"
        target="_blank"
        rel="noreferrer"
        >{{ t("access_accessmap_link2") }} ↗</a
      >
    </div>
    <div class="glass-card map-frame">
      <iframe
        title="Map to Keio University Yagami Campus"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  </section>
  <section v-else-if="path === '/links'" class="section-wrap card-list">
    <article v-for="link in links" :key="link.url" class="glass-card info-card">
      <h2>{{ link.title }}</h2>
      <a class="button button-primary" :href="link.url" target="_blank" rel="noreferrer">here ↗</a>
    </article>
  </section>
  <section v-else-if="path === '/for_collaborations'" class="section-wrap content-stack">
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_about") }}</h2>
    </article>
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_example") }}</h2>
      <ul>
        <li v-for="i in 5" :key="i">{{ t(`for_collaborations_example${i}`) }}</li>
      </ul>
    </article>
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_contact") }}</h2>
      <p>{{ t("for_collaborations_access") }}</p>
      <p>
        <strong>Email: </strong
        ><a :href="`mailto:${t('for_collaborations_email')}`">{{
          t("for_collaborations_email")
        }}</a>
      </p>
    </article>
  </section>
  <section v-else-if="path === '/b3'" class="section-wrap">
    <div class="glass-card status-message">{{ t("b3_preparing") }}</div>
  </section>
  <section v-else class="section-wrap">
    <div class="glass-card status-message">
      <h2>404 Not Found</h2>
      <RouterLink to="/" class="text-link">{{ t("menu_home") }} ↗</RouterLink>
    </div>
  </section>
</template>
