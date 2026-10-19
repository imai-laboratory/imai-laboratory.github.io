<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { texts } from "../../state";
import PageHero from "../../components/PageHero.vue";
import RemoteActivityPage from "../../components/RemoteActivityPage.vue";

const route = useRoute();
const t = (key: string) => texts.value[key] ?? key;
const path = computed(() => `/activity/${String(route.params.kind)}`);
const title = computed(() => t(`activity_${String(route.params.kind)}_head`));
</script>

<template>
  <PageHero :title="title" :translate="t" />
  <RemoteActivityPage :path="path" />
</template>
