<template>
  <div class="container">
    <h1>Stats for {{ username }}</h1>
    <form>
      <label for="year">Year</label>
      <input @input="debounceYear" type="number" id="year" :value="selectedYear" />
      <div class="timeclasses">
        <label for="rapid">Rapid</label>
        <input type="checkbox" id="rapid" />
        <label for="rapid">Blitz</label>
        <input type="checkbox" id="rapid" />
        <label for="rapid">Bullet</label>
        <input type="checkbox" id="rapid" />
      </div>
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

const username = useRoute().query.username as string;
if (!username) {
  throw Error('No username provided. This should never happen');
}

let debounce: ReturnType<typeof setTimeout> = setTimeout(() => '', 600);
const debounceYear = (event: Event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const target = event.target as HTMLInputElement;
    selectedYear.value = Number(target.value) ?? selectedYear.value;
  }, 1000);
};

const { gameStats, loading, selectedYear } = useStats(username);
const getStats = (hour: number): IStats => {
  return gameStats.value.get(hour) ?? new Stats();
};
</script>

<style scoped></style>
