<script setup lang="ts">
import { useTranslation } from "../../../composables/useTranslation";
import {
  researchBlock,
  researchContent,
  researchDescription,
  researchMedia,
  subsectionHeading,
} from "../styles";

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
      :class="researchBlock"
    >
      <div :class="subsectionHeading">
        <h2>{{ t(`research_${key}_head`) }}</h2>
      </div>

      <template v-if="key === 'scains'">
        <div :class="researchContent">
          <div :class="researchMedia">
            <video :src="videos.scains" controls preload="metadata"></video>
          </div>
          <div :class="researchDescription">
            <p>{{ t("research_scains1_exp") }}</p>
          </div>
        </div>

        <div :class="researchContent">
          <div :class="researchMedia">
            <video :src="videos.scainsAlgorithm" controls preload="metadata"></video>
          </div>
          <div :class="researchDescription">
            <p>{{ t("research_scains2_exp") }}</p>
          </div>
        </div>
      </template>
      <div v-else :class="researchContent">
        <div v-if="researchAssets[key]" :class="researchMedia">
          <img :src="researchAssets[key]" :alt="t(`research_${key}_head`)" loading="lazy" />
        </div>
        <div v-else-if="videos[key]" :class="researchMedia">
          <video :src="videos[key]" controls preload="metadata"></video>
        </div>

        <div :class="researchDescription">
          <p>{{ t(`research_${key}_exp`) }}</p>
        </div>
      </div>

      <div v-if="key === 'ui' && videos.teroos" :class="researchContent">
        <div :class="researchMedia">
          <video :src="videos.teroos" controls preload="metadata"></video>
        </div>
        <div :class="researchDescription">
          <p>{{ t("research_ui_exp2") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
