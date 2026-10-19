<script setup lang="ts">
import { useTranslation } from "../../../composables/useTranslation";

defineProps<{
  researchKeys: string[];
  researchAssets: Record<string, string>;
  videos: Record<string, string>;
}>();

const { t } = useTranslation();
</script>

<template>
  <section class="section-wrap content-stack">
    <div
      v-for="key in researchKeys"
      :id="'research_section_' + key"
      :key="key"
      class="research-block"
    >
      <div class="subsection-heading">
        <h2>{{ t(`research_${key}_head`) }}</h2>
        <span>↗</span>
      </div>

      <template v-if="key === 'scains'">
        <div class="research-content">
          <div class="research-media">
            <video :src="videos.scains" controls preload="metadata"></video>
          </div>
          <div class="research-description">
            <p>{{ t("research_scains1_exp") }}</p>
          </div>
        </div>

        <div class="research-content">
          <div class="research-media">
            <video :src="videos.scainsAlgorithm" controls preload="metadata"></video>
          </div>
          <div class="research-description">
            <p>{{ t("research_scains2_exp") }}</p>
          </div>
        </div>
      </template>
      <div v-else class="research-content">
        <div v-if="researchAssets[key]" class="research-media">
          <img :src="researchAssets[key]" :alt="t(`research_${key}_head`)" loading="lazy" />
        </div>
        <div v-else-if="videos[key]" class="research-media">
          <video :src="videos[key]" controls preload="metadata"></video>
        </div>

        <div class="research-description">
          <p>{{ t(`research_${key}_exp`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
