<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { texts } from "../../state";
import PageHero from "../../components/PageHero.vue";
import RemotePublicationPage from "../../components/RemotePublicationPage.vue";

const route = useRoute();
const t = (key: string) => texts.value[key] ?? key;
const path = computed(() => `/publication/${String(route.params.kind)}`);
const title = computed(() => t(`publication_${String(route.params.kind)}_head`));
</script>

<template>
  <PageHero :title="title" :translate="t" />
  <RemotePublicationPage :path="path" />
</template>
