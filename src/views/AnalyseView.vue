<template>
  <div class="container">
    <h1>Stats for {{ username }}</h1>
    <form>
      <YearSelection :start-year="startYear" @year-changed="yearChanged" />
      <TimeClassSelection @class-added="addTimeClass" @class-removed="removeTimeClass" />
    </form>
    <p v-if="loading">Loading ...</p>
    <table v-else>
      <tr>
        <th>Hour of day</th>
        <th>W/L Ratio</th>
      </tr>

      <tr v-for="hour in 24" :key="hour">
        <td>{{ hour - 1 }}</td>
        <td>{{ getStats(hour - 1).getWLRatio() }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStats } from '@/composables/stats';
import { Stats, type IStats } from '@/model/entity';
import YearSelection from '../components/YearSelection.vue';
import TimeClassSelection from '../components/TimeClassSelection.vue';
import type { ETimeClass } from '@/model/dto/game-dto.types';

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

// Stats
const getStats = (hour: number): IStats => {
  return gameStats.value.get(hour) ?? new Stats();
};
</script>

<style scoped></style>
