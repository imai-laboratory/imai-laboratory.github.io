<script setup lang="ts">
import { texts } from "../../state";
import PageHero from "../../components/PageHero.vue";
import RemoteActivityPage from "../../components/RemoteActivityPage.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('activity_award_head')" :translate="t" />
  <RemoteActivityPage path="/activity" />
</template>
