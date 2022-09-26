<template>
  <h1>Stats for {{ userName }}</h1>
  <li v-for="(item, index) in gameResults" :key="index">
    {{ item.result }}
  </li>
</template>

<script setup lang="ts">
import { useProvider } from '@/composables/provider';

import type { IGameResult } from '@/model/entity/game-result';

import { getYear } from 'date-fns';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const { gameService } = useProvider();

const userName = useRoute().query.username as string;
if (!userName) {
  throw Error('No username provided. This should never happen');
}

const gameResults = ref([] as IGameResult[]);
const selectedYear = ref(getYear(new Date()));

const fetchGameStats = async () => {
  console.log('where is my fetch');

  gameResults.value = await gameService.fetchGamesByYear(selectedYear.value, userName);
  console.log(gameResults.value);
};
onMounted(fetchGameStats);
</script>

<style scoped></style>
