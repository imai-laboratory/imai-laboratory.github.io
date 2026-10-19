<script setup lang="ts">
import type { ContentItem, Language, YearGroup } from "../../../types/content";
import LoadingSkeleton from "../../../components/ui/LoadingSkeleton.vue";
import { activityRow } from "../styles";

defineProps<{
  language: Language;
  years: YearGroup<ContentItem>[];
  loading: boolean;
  errorMessage: string;
}>();
</script>

<template>
  <section class="section-wrap content-stack">
    <LoadingSkeleton v-if="loading" :rows="4" />
    <p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>

    <section v-for="group in years" :key="group.year" class="year-section">
      <h2 class="year-heading">{{ group.year }}</h2>
      <article
        v-for="(item, index) in group.items || []"
        :key="index"
        :class="[activityRow, 'glass-panel']"
      >
        <strong>{{ item.title }}</strong>
        <div v-if="item.description" v-html="item.description"></div>
      </article>
    </section>
  </section>
</template>
