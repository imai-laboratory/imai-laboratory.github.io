<script setup lang="ts">
import type { ContentItem, Language, YearGroup } from "../types/content";

defineProps<{
  language: Language;
  years: YearGroup<ContentItem>[];
  loading: boolean;
  errorMessage: string;
}>();
</script>

<template>
  <section class="section-wrap content-stack">
    <p v-if="loading" class="status-message">
      {{ language === "ja" ? "読み込み中…" : "Loading…" }}
    </p>
    <p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>

    <section v-for="group in years" :key="group.year" class="year-section">
      <h2 class="year-heading">{{ group.year }}</h2>
      <article
        v-for="(item, index) in group.items || []"
        :key="index"
        class="activity-row glass-panel"
      >
        <strong>{{ item.title }}</strong>
        <div v-if="item.description" v-html="item.description"></div>
      </article>
    </section>
  </section>
</template>
