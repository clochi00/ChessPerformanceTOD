<template>
  <Bar :chart-data="chartData" :chartOptions="chartOptions" chartId="bar-chart" :width="800" :height="500" />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { xAxislabels } from './x-labels';
import { Stats, type IStats } from '@/model/entity';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps<{
  gameStats: Map<Number, IStats>;
}>();

const getStats = (hour: number): IStats => {
  return props.gameStats.get(hour) ?? new Stats();
};

const dataWins: number[] = [];
const dataLosses: number[] = [];
const dataDraws: number[] = [];

for (let hour = 0; hour < 24; ++hour) {
  const stats = getStats(hour);
  dataWins.push(stats.wins);
  dataLosses.push(stats.losses);
  dataDraws.push(stats.draws);
}

const chartData = {
  labels: xAxislabels,
  datasets: [
    {
      label: 'Wins',
      backgroundColor: '#78eb6e',
      data: dataWins,
    },

    {
      label: 'Losses',
      backgroundColor: '#eb6e6e',
      data: dataLosses,
    },
    {
      label: 'Draws',
      backgroundColor: '#cccccc',
      data: dataDraws,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped></style>
