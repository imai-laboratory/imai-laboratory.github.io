<script setup lang="ts">
import { useTranslation } from "../composables/useTranslation";

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

      <div class="research-content">
        <div v-if="researchAssets[key]" class="research-media">
          <img :src="researchAssets[key]" :alt="t(`research_${key}_head`)" loading="lazy" />
        </div>
        <div v-else-if="videos[key]" class="research-media">
          <video :src="videos[key]" controls preload="metadata"></video>
        </div>

        <div class="research-description">
          <p>{{ t(`research_${key === "scains" ? "scains1" : key}_exp`) }}</p>
          <p v-if="key === 'scains'">{{ t("research_scains2_exp") }}</p>
          <video
            v-if="key === 'scains'"
            src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4"
            controls
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>
