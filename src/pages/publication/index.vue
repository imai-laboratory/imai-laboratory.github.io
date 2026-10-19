<script setup lang="ts">
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/PageHero.vue";
import RemotePublicationPage from "../../components/RemotePublicationPage.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('publication_journal_head')" />
  <RemotePublicationPage path="/publication" />
</template>
