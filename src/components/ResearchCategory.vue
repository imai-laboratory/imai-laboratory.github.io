<script setup lang="ts">
import type { Translator } from "../types/ui";

defineProps<{
  researchKey: string;
  researchAssets: Record<string, string>;
  translate: Translator;
}>();
</script>

<template>
  <section class="section-wrap content-stack">
    <div class="glass-card research-content">
      <img
        v-if="researchAssets[researchKey]"
        :src="researchAssets[researchKey]"
        :alt="translate(`research_${researchKey}_head`)"
      />
      <div>
        <h2>{{ translate(`research_${researchKey}_head`) }}</h2>
        <p>{{ translate(`research_${researchKey}_exp`) }}</p>
      </div>
    </div>
  </section>
</template>
