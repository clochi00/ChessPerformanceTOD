import { ETimeClass } from '@/model/dto/game-dto.types';
import type { IStats } from '@/model/entity';
import { getYear } from 'date-fns';
import { onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';

const selectedClasses = ref(new Set<ETimeClass>([ETimeClass.RAPID, ETimeClass.BLITZ, ETimeClass.BULLET]));
const username = ref(undefined as string | undefined);
export const useStats = () => {
  const { gameService, statisticService } = useProvider();
  const loading = ref(true);

  const gameStats = ref(new Map<number, IStats>());
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    if (username.value) {
      loading.value = true;
      const gameResults = await gameService.fetchGamesByYear(selectedYear.value, username.value, selectedClasses.value);
      gameStats.value = statisticService.mapResultsToHours(gameResults);
      loading.value = false;
    }
  };
  onMounted(fetchGameStats);

  watch(selectedYear, fetchGameStats);
  watch(selectedClasses.value, fetchGameStats);

  const setUsername = (user: string) => {
    username.value = user;
  };

  return {
    loading,
    gameStats,
    selectedYear,
    selectedClasses,
    setUsername,
  };
};
