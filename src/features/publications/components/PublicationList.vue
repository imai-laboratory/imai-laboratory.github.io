<script setup lang="ts">
import { computed } from "vue";
import { localizedString } from "../../../utils/localization";
import { formatAuthor, publicationNumber } from "../../../utils/contentFormatting";
import type { ContentItem, Language, YearGroup } from "../../../types/content";
import LoadingSkeleton from "../../../components/ui/LoadingSkeleton.vue";
import { paperLinks, paperMeta, paperTitle, publicationIndex, publicationRow } from "../styles";

const props = defineProps<{
  language: Language;
  years: YearGroup<ContentItem>[];
  loading: boolean;
  errorMessage: string;
}>();

const visibleYears = computed(() => props.years.filter((group) => group.items?.length));
</script>

<template>
  <section class="section-wrap content-stack">
    <LoadingSkeleton v-if="loading" :rows="5" />
    <p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>

    <section v-for="(group, groupIndex) in visibleYears" :key="group.year" class="year-section">
      <h2 class="year-heading">{{ group.year }}</h2>
      <div
        v-for="(paper, index) in group.items || []"
        :key="index"
        :class="[publicationRow, 'glass-panel']"
      >
        <span :class="publicationIndex">
          {{ publicationNumber(visibleYears, Number(groupIndex), Number(index)) }}
        </span>
        <div>
          <p v-if="paper.author">
            <strong>{{ formatAuthor(paper.author, language) }}</strong>
          </p>
          <p v-if="paper.title" :class="paperTitle">
            “{{ localizedString(paper.title, language).replace(/_/g, " ") }}”
          </p>
          <p :class="paperMeta">
            {{
              [
                paper.book && localizedString(paper.book, language),
                paper.vol,
                paper.no,
                paper.page,
                paper.year,
              ]
                .filter(Boolean)
                .join(", ")
                .replace(/_/g, " ")
            }}
          </p>
          <p :class="paperMeta">
            {{
              [
                paper.host_city && localizedString(paper.host_city, language),
                paper.host_country && localizedString(paper.host_country, language),
              ]
                .filter(Boolean)
                .join(language === "ja" ? "・" : ", ")
            }}
          </p>
          <p v-if="paper.event_duration" :class="paperMeta">
            {{ language === "ja" ? "開催期間: " : "Event duration: " }}{{ paper.event_duration }}
          </p>
          <p v-if="paper.presentation_date" :class="paperMeta">
            {{ language === "ja" ? "発表日: " : "Presentation date: "
            }}{{ paper.presentation_date }}
          </p>
          <div :class="paperLinks">
            <a
              v-if="paper.draft_pdf_url"
              :href="paper.draft_pdf_url"
              target="_blank"
              rel="noreferrer"
              >[PDF]</a
            >
            <a v-if="paper.appendix_url" :href="paper.appendix_url" target="_blank" rel="noreferrer"
              >[Appendix]</a
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
