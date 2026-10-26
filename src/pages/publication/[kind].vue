<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTranslation } from "../../composables/useTranslation";
import PageHero from "../../components/ui/PageHero.vue";
import RemotePublicationPage from "../../features/publications/components/RemotePublicationPage.vue";

const route = useRoute();

const { t } = useTranslation();

const path = computed(() => `/publication/${String(route.params.kind)}`);

const title = computed(() => t(`publication_${String(route.params.kind)}_head`));
</script>

<template>
  <PageHero :title="title" />
  <RemotePublicationPage :path="path" />
</template>
