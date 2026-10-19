<script setup lang="ts">
import { computed } from "vue";
import { lang, texts } from "../state";
import { useRemoteContent } from "../composables/useRemoteContent";
import PageHero from "../components/PageHero.vue";
import MemberList from "../components/MemberList.vue";

const t = (key: string) => texts.value[key] ?? key;
const path = computed(() => "/member");
const { memberGroups, pastGroups, loading, errorMessage, refresh } = useRemoteContent(path, lang);
</script>

<template>
  <PageHero :title="t('members_head')" :translate="t" />
  <MemberList
    :language="lang"
    :groups="memberGroups"
    :past-groups="pastGroups"
    :loading="loading"
    :error-message="errorMessage"
    :translate="t"
    :refresh="refresh"
  />
</template>
