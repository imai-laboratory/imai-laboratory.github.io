<script setup lang="ts">
import { texts } from "../state";
import { LINKS } from "../data/siteContent";
import PageHero from "../components/PageHero.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('links_head')" :translate="t" />
  <section class="section-wrap card-list">
    <article v-for="link in LINKS" :key="link.url" class="glass-card info-card">
      <h2>{{ link.title }}</h2>
      <a class="button button-primary" :href="link.url" target="_blank" rel="noreferrer">here ↗</a>
    </article>
  </section>
</template>
