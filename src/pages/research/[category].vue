<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { lang, texts } from "../../state";
import { RESEARCH_ASSETS, RESEARCH_SUBPAGES } from "../../data/siteContent";
import PageHero from "../../components/PageHero.vue";
import ResearchCategory from "../../components/ResearchCategory.vue";

const route = useRoute();
const t = (key: string) => texts.value[key] ?? key;
const category = computed(() => String(route.params.category));
const researchKey = computed(() => RESEARCH_SUBPAGES[category.value] ?? category.value);
const researchAssets = computed(() => ({
  ...RESEARCH_ASSETS,
  ai: lang.value === "ja" ? "/res/research/scain_ja.png" : "/res/research/scain_en.png",
}));
</script>

<template>
  <PageHero :title="t(`menu_research_${researchKey}`)" :translate="t" />
  <ResearchCategory :research-key="researchKey" :research-assets="researchAssets" :translate="t" />
</template>
