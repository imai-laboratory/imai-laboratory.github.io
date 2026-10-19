<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <section class="page-hero">
    <div class="hero-content">
      <p class="eyebrow">IMAI LABORATORY</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>
