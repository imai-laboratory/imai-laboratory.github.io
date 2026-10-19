<script setup lang="ts">
import { computed } from "vue";
import { lang } from "../../../state";
import { useRemoteContent } from "../../../composables/useRemoteContent";
import ActivityList from "./ActivityList.vue";

const props = defineProps<{ path: string }>();

const routePath = computed(() => props.path);

const { years, loading, errorMessage } = useRemoteContent(routePath, lang);
</script>

<template>
  <ActivityList :language="lang" :years="years" :loading="loading" :error-message="errorMessage" />
</template>
