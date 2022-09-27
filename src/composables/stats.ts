import type { IStats } from '@/model/entity';
import { getYear } from 'date-fns';
import { onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';

export const useStats = (username: string) => {
  const { gameService, statisticService } = useProvider();
  const loading = ref(true);

  const gameStats = ref(new Map<number, IStats>());
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    loading.value = true;
    const gameResults = await gameService.fetchGamesByYear(selectedYear.value, username);
    gameStats.value = statisticService.mapResultsToHours(gameResults);
    loading.value = false;
  };
  onMounted(fetchGameStats);

  watch(selectedYear, fetchGameStats);

  return {
    loading,
    gameStats,
    selectedYear,
  };
};
