<script setup lang="ts">
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/PageHero.vue";
import RemoteActivityPage from "../../components/RemoteActivityPage.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('activity_award_head')" />
  <RemoteActivityPage path="/activity" />
</template>
