<template>
  <h1>Stats for {{ username }}</h1>
  <form>
    <label for="year">Year</label>
    <input @input="debounceYear" type="number" id="year" :value="selectedYear" />
  </form>
  <p v-if="loading">Loading ...</p>
  <li v-else v-for="(item, index) in gameResults" :key="index">
    {{ item.result }}
  </li>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStats } from '@/composables/stats';

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

const { gameResults, loading, selectedYear } = useStats(username);
</script>

<style scoped></style>
