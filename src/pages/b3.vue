<script setup lang="ts">
import { texts } from "../state";
import PageHero from "../components/PageHero.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('menu_b3')" :translate="t" />
  <section class="section-wrap">
    <div class="glass-card status-message">{{ t("b3_preparing") }}</div>
  </section>
</template>
