<script setup lang="ts">
import { useTranslation } from "../composables/useTranslation";
import PageHero from "../components/ui/PageHero.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('menu_b3')" />
  <section class="section-wrap">
    <div class="glass-card status-message">{{ t("b3_preparing") }}</div>
  </section>
</template>
