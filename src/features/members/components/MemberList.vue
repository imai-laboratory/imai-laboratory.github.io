<script setup lang="ts">
import { localizedString } from "../../../utils/localization";
import type { Language, MemberGroup, PastMemberGroup } from "../../../types/content";
import { formatPastGrade } from "../../../utils/contentFormatting";
import { useTranslation } from "../../../composables/useTranslation";
import { MEMBERS_IMAGES_BASE } from "../../../data/remoteContent";
import LoadingSkeleton from "../../../components/ui/LoadingSkeleton.vue";

defineProps<{
  language: Language;
  groups: MemberGroup[];
  pastGroups: PastMemberGroup[];
  loading: boolean;
  errorMessage: string;
  refresh: () => Promise<void>;
}>();

const { t } = useTranslation();
</script>

<template>
  <section class="section-wrap content-stack">
    <LoadingSkeleton v-if="loading" :rows="4" />
    <p v-if="errorMessage" class="status-message">
      {{ errorMessage }}
      <button class="text-link" @click="refresh">
        {{ language === "ja" ? "再読み込み" : "Retry" }}
      </button>
    </p>

    <section v-for="(group, index) in groups" :key="index" class="member-group">
      <h2 class="section-title">{{ localizedString(group.role, language) }}</h2>
      <div class="member-grid">
        <article
          v-for="(member, memberIndex) in group.members || []"
          :key="memberIndex"
          class="member-card glass-panel"
        >
          <img
            class="member-avatar"
            :src="member.img ? `${MEMBERS_IMAGES_BASE}${member.img}` : '/res/title.png'"
            :alt="localizedString(member.name, language)"
            loading="lazy"
          />
          <h3>{{ localizedString(member.name, language) }}</h3>
          <p>{{ localizedString(member.grade, language) }}</p>
          <a v-if="member.email" :href="`mailto:${member.email}`">{{ member.email }}</a>
          <div v-if="member.option" class="member-option" v-html="member.option"></div>
        </article>
      </div>
    </section>

    <h2 class="section-title">{{ t("members_past_head") }}</h2>
    <div class="past-member-list">
      <section v-for="(group, index) in pastGroups" :key="index">
        <h3>{{ group.year }}</h3>
        <p v-for="(member, memberIndex) in group.members || []" :key="memberIndex">
          {{ localizedString(member.name, language) }}
          <span v-if="member.grade">({{ formatPastGrade(member.grade, t) }})</span>
        </p>
      </section>
    </div>
  </section>
</template>
