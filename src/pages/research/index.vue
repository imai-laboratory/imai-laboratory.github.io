<script setup lang="ts">
import { computed } from "vue";
import { lang } from "../../state";
import { useTranslation } from "../../composables/useTranslation";
import { RESEARCH_ASSETS, RESEARCH_KEYS, RESEARCH_VIDEOS } from "../../data/siteContent";
import PageHero from "../../components/ui/PageHero.vue";
import ResearchSections from "../../features/research/components/ResearchSections.vue";

const { t } = useTranslation();

const researchAssets = computed(() => ({
  ...RESEARCH_ASSETS,
  ai: lang.value === "ja" ? "/res/research/scain_ja.png" : "/res/research/scain_en.png",
}));
</script>

<template>
  <PageHero :title="t('menu_research_theme')" />
  <ResearchSections
    :research-keys="RESEARCH_KEYS"
    :research-assets="researchAssets"
    :videos="RESEARCH_VIDEOS"
  />
</template>
