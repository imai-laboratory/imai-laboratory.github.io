<script setup lang="ts">
import { computed } from "vue";
import { lang, texts } from "../state";
import { RESEARCH_ASSETS } from "../data/siteContent";
import PageHero from "../components/PageHero.vue";
import ResearchCategory from "../components/ResearchCategory.vue";

const t = (key: string) => texts.value[key] ?? key;
const researchAssets = computed(() => ({
  ...RESEARCH_ASSETS,
  ai: lang.value === "ja" ? "/res/research/scain_ja.png" : "/res/research/scain_en.png",
}));
</script>

<template>
  <PageHero :title="t('menu_research_hai')" :translate="t" />
  <ResearchCategory research-key="hai" :research-assets="researchAssets" :translate="t" />
</template>
