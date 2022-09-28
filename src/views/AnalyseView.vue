<template>
  <div class="container">
    <div class="stats-container">
      <h1>Stats for {{ username }}</h1>

      <YearSelection :start-year="startYear" @year-changed="yearChanged" />
      <TimeClassSelection @class-added="addTimeClass" @class-removed="removeTimeClass" />
      <!-- <StatsPanel :game-stats="gameStats" :loading="loading" /> -->
      <p v-if="loading">Loading ...</p>
      <BarChart v-else :game-stats="gameStats" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStats } from '@/composables/stats';
import YearSelection from '../components/YearSelection.vue';
import TimeClassSelection from '../components/TimeClassSelection.vue';
import type { ETimeClass } from '@/model/dto/game-dto.types';
import BarChart from '@/components/charts/barchart';

const { gameStats, loading, setUsername, selectedYear, selectedClasses } = useStats();

// Set Username
const username = useRoute().query.username as string;
if (!username) {
  throw Error('No username provided. This should never happen');
}
setUsername(username);

// Year Selection
const startYear = selectedYear.value;
const yearChanged = (year: number) => {
  selectedYear.value = year;
};

// Time Classes
const addTimeClass = (timeClass: ETimeClass) => {
  selectedClasses.value.add(timeClass);
};
const removeTimeClass = (timeClass: ETimeClass) => {
  selectedClasses.value.delete(timeClass);
};
</script>

<style scoped>
.stats-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
