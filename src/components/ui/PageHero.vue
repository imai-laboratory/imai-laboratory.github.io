<script setup lang="ts">
import { css } from "../../../styled-system/css";

defineProps<{ title: string }>();

const pageHeroClass = css({
  minHeight: { base: "170px", md: "210px" },
  marginTop: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(120deg, var(--colors-page-hero-start) 0%, var(--colors-page-hero-middle) 52%, var(--colors-page-hero-end) 100%)",
  color: "white",
  "& .page-hero-content": {
    boxSizing: "border-box",
    width: { base: "calc(100% - 32px)", md: "min(1160px, calc(100% - 40px))" },
    maxWidth: "100%",
    marginInline: "auto",
    padding: "38px 0",
    textAlign: "center",
  },
  "& .page-hero-eyebrow": {
    marginBottom: "10px",
    color: "var(--colors-eyebrow)",
  },
  "& h1": {
    margin: "0 auto",
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
  },
});
</script>

<template>
  <section :class="pageHeroClass">
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">IMAI LABORATORY</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>
