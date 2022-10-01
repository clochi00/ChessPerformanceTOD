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
const dataWL: number[] = [];
const dataGameCount: number[] = [];
for (let hour = 0; hour < 24; ++hour) {
  const stats = getStats(hour);
  dataWL.push(stats.getWLRatio());
  dataGameCount.push(Math.round(stats.getGameCount() / 7));
}

const chartData = {
  labels: xAxislabels,
  datasets: [
    {
      label: 'W/L Ratio',
      backgroundColor: function (context: any) {
        const index = context.dataIndex;
        const value = context.dataset.data[index];

        return value < 0
          ? '#eb6e6e' // red
          : '#78eb6e'; // green
      },

      data: dataWL,
    },
    {
      label: '#Games per Week',
      backgroundColor: '#c5d4db',
      data: dataGameCount,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped></style>
