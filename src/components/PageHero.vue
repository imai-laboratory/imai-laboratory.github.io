<script setup lang="ts">
import type { Translator } from "../types/ui";

defineProps<{
  title: string;
  translate: Translator;
}>();
</script>

<template>
  <section class="page-hero">
    <div class="hero-content">
      <p class="eyebrow">IMAI LABORATORY</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>
