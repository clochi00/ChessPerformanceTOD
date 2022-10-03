<template>
  <div class="time-filters">
    <TimeFilterButton title="7 Days" :days="7" />
    <TimeFilterButton title="30 Days" :days="30" />
    <TimeFilterButton title="90 Days" :days="90" />
    <TimeFilterButton title="1 Year" :days="365" />
  </div>
</template>

<script setup lang="ts">
import TimeFilterButton from './TimeFilterButton.vue';
</script>

<style scoped>
.time-filters {
  border-bottom: 1px lightgray solid;
}
</style>
