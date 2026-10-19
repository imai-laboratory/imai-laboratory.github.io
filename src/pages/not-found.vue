<script setup lang="ts">
import { RouterLink } from "vue-router";
import { texts } from "../state";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <section class="section-wrap">
    <div class="glass-card status-message">
      <h2>404 Not Found</h2>
      <RouterLink to="/" class="text-link">{{ t("menu_home") }} ↗</RouterLink>
    </div>
  </section>
</template>
