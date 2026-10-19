<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/PageHero.vue";
import RemoteActivityPage from "../../components/RemoteActivityPage.vue";

const route = useRoute();
const { t } = useTranslation();
const path = computed(() => `/activity/${String(route.params.kind)}`);
const title = computed(() => t(`activity_${String(route.params.kind)}_head`));
</script>

<template>
  <PageHero :title="title" />
  <RemoteActivityPage :path="path" />
</template>
