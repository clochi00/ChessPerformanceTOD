import { defineComponent, h, type PropType } from 'vue';

import { Bar } from 'vue-chartjs';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type Plugin,
} from 'chart.js';
import { Stats, type IStats } from '@/model/entity';
import { xAxislabels } from './x-labels';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {},
    },
    plugins: {
      type: Array as PropType<Plugin<'bar'>[]>,
      default: () => [],
    },
    gameStats: {
      type: Object as PropType<Map<number, IStats>>,
      required: true,
    },
  },
  setup(props) {
    const getStats = (hour: number): IStats => {
      return props.gameStats.get(hour) ?? new Stats();
    };
    const data: { x: string; wl: number; gamecount: number }[] = [];
    for (let hour = 0; hour < 24; ++hour) {
      const stats = getStats(hour);
      data.push({ x: xAxislabels[hour], wl: stats.getWLRatio(), gamecount: stats.getGameCount() / 7 });
    }
    const chartData = {
      labels: xAxislabels,
      datasets: [
        {
          label: 'W/L Ratio',
          backgroundColor: function (context: any) {
            const index = context.dataIndex;
            const value = context.dataset.data[index].wl;

            return value < 0
              ? '#eb6e6e' // red
              : '#78eb6e'; // green
          },
          data: data,
          parsing: {
            yAxisKey: 'wl',
          },
        },
        {
          label: '#Games per Week',
          backgroundColor: '#c5d4db',
          data: data,
          parsing: {
            yAxisKey: 'gamecount',
          },
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      });
  },
});
