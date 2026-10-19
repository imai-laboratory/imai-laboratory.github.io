<script setup lang="ts">
import { texts } from "../state";
import PageHero from "../components/PageHero.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('menu_for_collaborations')" :translate="t" />
  <section class="section-wrap content-stack">
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_about") }}</h2>
    </article>
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_example") }}</h2>
      <ul>
        <li v-for="i in 5" :key="i">{{ t(`for_collaborations_example${i}`) }}</li>
      </ul>
    </article>
    <article class="glass-card info-card">
      <h2>{{ t("for_collaborations_contact") }}</h2>
      <p>{{ t("for_collaborations_access") }}</p>
      <p>
        <strong>Email: </strong>
        <a :href="`mailto:${t('for_collaborations_email')}`">
          {{ t("for_collaborations_email") }}
        </a>
      </p>
    </article>
  </section>
</template>
