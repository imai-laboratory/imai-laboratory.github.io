<script setup lang="ts">
import { texts } from "../../state";
import PageHero from "../../components/PageHero.vue";
import RemotePublicationPage from "../../components/RemotePublicationPage.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('publication_journal_head')" :translate="t" />
  <RemotePublicationPage path="/publication" />
</template>
