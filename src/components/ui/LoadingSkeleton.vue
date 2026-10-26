<script setup lang="ts">
import { css } from "../../../styled-system/css";

const { rows = 3 } = defineProps<{
  rows?: number;
}>();

const listClass = css({
  display: "grid",
  gap: "14px",
});

const rowClass = css({
  display: "grid",
  gap: "10px",
  minHeight: "76px",
  padding: "20px 24px",
  border: "1px solid rgba(255, 255, 255, 0.75)",
  borderRadius: "skeleton",
  background:
    "linear-gradient(100deg, var(--colors-skeleton-surface) 20%, var(--colors-skeleton-highlight) 40%, var(--colors-skeleton-surface) 60%)",
  backgroundSize: "200% 100%",
  boxShadow: "glass",
  animation: "skeleton-shimmer 1.4s ease-in-out infinite",
  "& span": {
    display: "block",
    width: "72%",
    height: "12px",
    borderRadius: "full",
    background: "var(--colors-skeleton-line)",
  },
  "& span:nth-child(2)": {
    width: "92%",
  },
  "& span:nth-child(3)": {
    width: "54%",
  },
});
</script>

<template>
  <div :class="listClass" role="status" aria-label="Loading">
    <div v-for="row in rows" :key="row" :class="rowClass" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
