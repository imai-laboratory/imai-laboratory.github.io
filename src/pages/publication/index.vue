<script setup lang="ts">
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/ui/PageHero.vue";
import RemotePublicationPage from "../../features/publications/components/RemotePublicationPage.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('publication_journal_head')" />
  <RemotePublicationPage path="/publication" />
</template>
