<script setup lang="ts">
const { rows = 3 } = defineProps<{
  rows?: number;
}>();
</script>

<template>
  <div class="loading-skeleton-list" role="status" aria-label="Loading">
    <div v-for="row in rows" :key="row" class="loading-skeleton-row" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
