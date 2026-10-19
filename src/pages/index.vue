<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useTranslation } from "../composables/useTranslation";

const { t } = useTranslation();
const topics = [
  ["research_section_ai", "research_ai_short"],
  ["research_section_si", "research_si_short"],
  ["research_section_ad", "research_ad_head"],
  ["research_section_iu", "research_iu_short"],
  ["research_section_ui", "research_ui_head"],
  ["research_section_ag", "research_ag_head"],
];
</script>

<template>
  <div class="page-home">
    <section class="hero hero-home glass-panel">
      <div class="hero-content">
        <h1>{{ t("home_imailab") }}</h1>
        <p class="hero-lead">{{ t("home_message") }}</p>
      </div>
    </section>

    <section class="section-wrap home-research glass-panel">
      <h2>{{ t("menu_research") }} {{ t("home_keywords") }}:</h2>
      <div class="topic-grid">
        <RouterLink
          v-for="topic in topics"
          :key="topic[0]"
          :to="{ path: '/research', hash: '#' + topic[0] }"
          class="topic-card"
        >
          <span class="topic-mark"></span>
          <strong>{{ t(topic[1]) }}</strong>
          <span class="topic-arrow">↗</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
