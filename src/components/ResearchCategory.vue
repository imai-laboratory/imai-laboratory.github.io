<script setup lang="ts">
import { useTranslation } from "../composables/useTranslation";

defineProps<{
  researchKey: string;
  researchAssets: Record<string, string>;
}>();

const { t } = useTranslation();
</script>

<template>
  <section class="section-wrap content-stack">
    <div class="glass-card research-content">
      <img
        v-if="researchAssets[researchKey]"
        :src="researchAssets[researchKey]"
        :alt="t(`research_${researchKey}_head`)"
      />
      <div>
        <h2>{{ t(`research_${researchKey}_head`) }}</h2>
        <p>{{ t(`research_${researchKey}_exp`) }}</p>
      </div>
    </div>
  </section>
</template>
