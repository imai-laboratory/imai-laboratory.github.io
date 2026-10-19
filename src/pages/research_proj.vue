<script setup lang="ts">
import { computed } from "vue";
import { lang, texts } from "../state";
import { PROJECTS } from "../data/siteContent";
import PageHero from "../components/PageHero.vue";

const t = (key: string) => texts.value[key] ?? key;
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
  <PageHero :title="t('menu_research_proj')" :translate="t" />
  <section class="section-wrap card-list">
    <article v-for="project in projects" :key="project.title" class="glass-card info-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.desc }}</p>
      <a class="button button-primary" :href="project.url" target="_blank" rel="noreferrer"
        >here ↗</a
      >
    </article>
  </section>
</template>
