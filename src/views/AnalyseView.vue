<template>
  <div class="container">
    <div class="stats-container">
      <h1>Stats for {{ username }}</h1>
      <div class="filters">
        <TimeClassSelection @class-added="addTimeClass" @class-removed="removeTimeClass" :loading="loading"/>
      </div>
      <TimeFilters :loading="loading"/>
      <div class="barcontainer">
        <ProgressBar v-if="loading" :progress="progress" />
        <BarChart v-else :game-stats="gameStats" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import TimeClassSelection from '../components/TimeClassSelection.vue';
import type { ETimeClass } from '@/model/dto/game/game-dto.types';
import BarChart from '@/components/charts/BarChart.vue';
import ProgressBar from '../components/ProgressBar.vue';
import { useLoadingProgress } from '@/composables/loading-progress';
import TimeFilters from '../components/timefilters/TimeFilters.vue';
import {useGameResults} from "@/composables/game-results";



const { loading, setUsername, selectedClasses, gameStats } = useGameResults()

// Set Username
const username = useRoute().query.username as string;
if (!username) {
  throw Error('No username provided. This should never happen');
}
setUsername(username);

// Time Classes
const addTimeClass = (timeClass: ETimeClass) => {
  selectedClasses.value.add(timeClass);
};
const removeTimeClass = (timeClass: ETimeClass) => {
  selectedClasses.value.delete(timeClass);
};

// Progress
const { progress } = useLoadingProgress();

</script>

<style scoped>
.barcontainer {
  height: 500px;
  width: 80%;
}
.stats-container {
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.filters {
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 2em;
}
</style>
