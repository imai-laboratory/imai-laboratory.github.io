<script setup lang="ts">
import { computed } from "vue";
import { lang, texts } from "../state";
import { RESEARCH_ASSETS, RESEARCH_KEYS, RESEARCH_VIDEOS } from "../data/siteContent";
import PageHero from "../components/PageHero.vue";
import ResearchSections from "../components/ResearchSections.vue";

const t = (key: string) => texts.value[key] ?? key;
const researchAssets = computed(() => ({
  ...RESEARCH_ASSETS,
  ai: lang.value === "ja" ? "/res/research/scain_ja.png" : "/res/research/scain_en.png",
}));
</script>

<template>
  <PageHero :title="t('menu_research_theme')" :translate="t" />
  <ResearchSections
    :research-keys="RESEARCH_KEYS"
    :research-assets="researchAssets"
    :videos="RESEARCH_VIDEOS"
    :translate="t"
  />
</template>
