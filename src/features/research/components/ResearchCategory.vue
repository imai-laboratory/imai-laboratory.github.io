<script setup lang="ts">
import { ref, watch } from "vue";
import { useTranslation } from "../../../composables/useTranslation";

const props = defineProps<{
  researchKey: string;
  researchAssets: Record<string, string>;
}>();

const { t } = useTranslation();

const imageLoading = ref(true);

watch(
  [() => props.researchKey, () => props.researchAssets[props.researchKey]],
  () => {
    imageLoading.value = Boolean(props.researchAssets[props.researchKey]);
  },
  { immediate: true },
);

const finishImageLoading = (): void => {
  imageLoading.value = false;
};
</script>

<template>
  <section class="section-wrap content-stack">
    <div class="glass-card research-content">
      <div v-if="researchAssets[researchKey]" class="research-media research-image-shell">
        <div v-if="imageLoading" class="research-skeleton" aria-hidden="true"></div>
        <img
          :key="researchKey"
          :class="{ 'is-loading': imageLoading }"
          :src="researchAssets[researchKey]"
          :alt="t(`research_${researchKey}_head`)"
          @error="finishImageLoading"
          @load="finishImageLoading"
        />
      </div>
      <div>
        <h2>{{ t(`research_${researchKey}_head`) }}</h2>
        <p>{{ t(`research_${researchKey}_exp`) }}</p>
      </div>
    </div>
  </section>
</template>
