<script setup lang="ts">
import { useTranslation } from "../composables/useTranslation";
import { LINKS } from "../data/siteContent";
import PageHero from "../components/ui/PageHero.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('links_head')" />
  <section class="section-wrap card-list">
    <article v-for="link in LINKS" :key="link.url" class="glass-card info-card">
      <h2>{{ link.title }}</h2>
      <a class="button button-primary" :href="link.url" target="_blank" rel="noreferrer">here ↗</a>
    </article>
  </section>
</template>
