<template>
  <div>
    <p v-if="loading">Loading ...</p>
    <BarChart :game-stats="gameStats" />
    <!-- <table v-else>
      <tr>
        <th>Hour of day</th>
        <th>W/L Ratio</th>
        <th>#Games</th>
      </tr>

      <tr v-for="hour in 24" :key="hour">
        <td>{{ hour - 1 }}</td>
        <td>{{ getStats(hour - 1).getWLRatio() }}</td>
        <td>{{ getStats(hour - 1).getGameCount() }}</td>
      </tr>
    </table> -->
  </div>
</template>

<script setup lang="ts">
import BarChart from '@/components/charts/barchart';
import type { IStats } from '@/model/entity';

defineProps({
  gameStats: { type: Map<number, IStats>, required: true },
  loading: { type: Boolean, required: true },
});
</script>

<style scoped></style>
