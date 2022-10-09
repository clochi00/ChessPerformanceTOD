<template>
  <div class="time-filters">
    <TimeFilterButton title="7 Days" :days="7" :loading="loading"/>
    <TimeFilterButton title="30 Days" :days="30" :loading="loading"/>
    <TimeFilterButton title="90 Days" :days="90" :loading="loading"/>
    <TimeFilterButton title="1 Year" :days="365" :loading="loading"/>
  </div>
</template>

<script setup lang="ts">
import TimeFilterButton from './TimeFilterButton.vue';
defineProps<{ loading: boolean }>();
</script>

<style scoped>
.time-filters {
  border-bottom: 1px lightgray solid;
}
</style>
