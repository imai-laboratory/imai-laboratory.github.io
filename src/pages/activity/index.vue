<script setup lang="ts">
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/ui/PageHero.vue";
import RemoteActivityPage from "../../features/activities/components/RemoteActivityPage.vue";

const { t } = useTranslation();
</script>

<template>
  <PageHero :title="t('activity_award_head')" />
  <RemoteActivityPage path="/activity" />
</template>
