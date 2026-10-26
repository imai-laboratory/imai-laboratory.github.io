<script setup lang="ts">
import { computed } from "vue";
import type { ContentItem, Language, YearGroup } from "../../../types/content";
import LoadingSkeleton from "../../../components/ui/LoadingSkeleton.vue";
import { activityRow } from "../styles";

const props = defineProps<{
  language: Language;
  years: YearGroup<ContentItem>[];
  loading: boolean;
  errorMessage: string;
}>();

const visibleYears = computed(() => props.years.filter((group) => group.items?.length));
</script>

<template>
  <section class="section-wrap content-stack">
    <LoadingSkeleton v-if="loading" :rows="4" />
    <p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>

    <section v-for="group in visibleYears" :key="group.year" class="year-section">
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
