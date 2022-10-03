import { ETimeClass } from '@/model/dto/game/game-dto.types';
import type { IGameResult, IStats } from '@/model/entity';
import { getYear } from 'date-fns';
import { nextTick, onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';
import { useGameResultsCache } from './results-cache';

const selectedClasses = ref(new Set<ETimeClass>([ETimeClass.RAPID, ETimeClass.BLITZ, ETimeClass.BULLET]));
const username = ref(undefined as string | undefined);
export const useStats = () => {
  console.log('>>> useStats()');
  const { statisticService } = useProvider();
  const { fetchGameResultsByYear, clearCache } = useGameResultsCache();
  const loading = ref(true);

  const gameStats = ref(new Map<number, IStats>());
  const gameResults = ref([] as IGameResult[]);
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    if (username.value) {
      loading.value = true;
      gameResults.value = await fetchGameResultsByYear(selectedYear.value, username.value);

      gameStats.value = filterGameStatsByTimeClass();
      loading.value = false;
    }
  };
  onMounted(fetchGameStats);

  const filterGameStatsByTimeClass = (): Map<number, IStats> => {
    return statisticService.mapResultsToHours(
      gameResults.value.filter((gr) => {
        return selectedClasses.value.has(gr.timeClass);
      }),
    );
  };

  const timeClassFilterChanged = async () => {
    loading.value = true;

    gameStats.value = filterGameStatsByTimeClass();

    nextTick(() => {
      loading.value = false;
    });
  };

  watch(selectedYear, fetchGameStats);
  watch(selectedClasses.value, timeClassFilterChanged);

  const setUsername = (user: string) => {
    clearCache();
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
