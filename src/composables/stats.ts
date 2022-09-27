import type { IGameResult } from '@/model/entity';
import { getYear } from 'date-fns';
import { onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';

export const useStats = (username: string) => {
  const { gameService } = useProvider();
  const loading = ref(true);

  const gameResults = ref([] as IGameResult[]);
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    loading.value = true;
    console.log('whas');

    gameResults.value = await gameService.fetchGamesByYear(selectedYear.value, username);
    loading.value = false;
  };
  onMounted(fetchGameStats);

  watch(selectedYear, fetchGameStats);

  return {
    loading,
    gameResults,
    selectedYear,
  };
};
