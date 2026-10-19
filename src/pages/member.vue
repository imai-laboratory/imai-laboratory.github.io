<script setup lang="ts">
import { computed } from "vue";
import { lang } from "../state";
import { useTranslation } from "../composables/useTranslation";
import { useRemoteContent } from "../composables/useRemoteContent";
import PageHero from "../components/PageHero.vue";
import MemberList from "../components/MemberList.vue";

const { t } = useTranslation();
const path = computed(() => "/member");
const { memberGroups, pastGroups, loading, errorMessage, refresh } = useRemoteContent(path, lang);
</script>

<template>
  <PageHero :title="t('members_head')" />
  <MemberList
    :language="lang"
    :groups="memberGroups"
    :past-groups="pastGroups"
    :loading="loading"
    :error-message="errorMessage"
    :refresh="refresh"
  />
</template>
