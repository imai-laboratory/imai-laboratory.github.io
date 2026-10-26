<script setup lang="ts">
import { computed } from "vue";
import { lang } from "../../../state";
import { useRemoteContent } from "../../../composables/useRemoteContent";
import PublicationList from "./PublicationList.vue";

const props = defineProps<{ path: string }>();

const routePath = computed(() => props.path);

const { years, loading, errorMessage } = useRemoteContent(routePath, lang);
</script>

<template>
  <PublicationList
    :language="lang"
    :years="years"
    :loading="loading"
    :error-message="errorMessage"
  />
</template>
