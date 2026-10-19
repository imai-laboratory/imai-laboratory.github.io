import { ref, watch, type Ref } from "vue";
import { ACTIVITIES_BASE, loadMembers, loadYearly, PUBLICATIONS_BASE } from "../data/remoteContent";
import type {
  ContentItem,
  Language,
  MemberGroup,
  PastMemberGroup,
  YearGroup,
} from "../types/content";

const publicationKinds: Record<string, string> = {
  "/publication": "journal",
  "/publication/journal": "journal",
  "/publication/international": "international",
  "/publication/domestic": "domestic",
};

const activityKinds: Record<string, string> = {
  "/activity": "award",
  "/activity/award": "award",
  "/activity/media": "media",
  "/activity/talk": "talk",
};

/** 現在のルートに必要な外部データを読み込む。 */
export function useRemoteContent(path: Ref<string>, language: Ref<Language>) {
  const memberGroups = ref<MemberGroup[]>([]);
  const pastGroups = ref<PastMemberGroup[]>([]);
  const years = ref<YearGroup<ContentItem>[]>([]);
  const loading = ref(false);
  const errorMessage = ref("");

  /** 現在のルートのデータを再取得する。 */
  async function refresh(): Promise<void> {
    loading.value = true;
    errorMessage.value = "";
    try {
      if (path.value === "/member") {
        const result = await loadMembers();
        memberGroups.value = result.members;
        pastGroups.value = result.pastMembers;
      } else if (publicationKinds[path.value]) {
        years.value = await loadYearly<ContentItem>(
          PUBLICATIONS_BASE,
          publicationKinds[path.value],
        );
      } else if (activityKinds[path.value]) {
        years.value = await loadYearly<ContentItem>(ACTIVITIES_BASE, activityKinds[path.value]);
      }
    } catch (error) {
      console.error(error);
      years.value = [];
      errorMessage.value =
        language.value === "ja" ? "データを読み込めませんでした。" : "Unable to load data.";
    } finally {
      loading.value = false;
    }
  }

  watch([path, language], refresh, { immediate: true });
  return {
    memberGroups,
    pastGroups,
    years,
    loading,
    errorMessage,
    refresh,
  };
}
