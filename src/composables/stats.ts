import { ETimeClass } from '@/model/dto/game/game-dto.types';
import type { IGameResult, IStats } from '@/model/entity';
import { getYear, isBefore, subDays } from 'date-fns';
import { nextTick, onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';
import { useGameResultsCache } from './results-cache';
import { useTimeFilter } from './timefilter';

const selectedClasses = ref(new Set<ETimeClass>([ETimeClass.RAPID, ETimeClass.BLITZ, ETimeClass.BULLET]));
const username = ref(undefined as string | undefined);
export const useStats = () => {
  console.log('>>> useStats()');
  const { statisticService, gameService } = useProvider();
  const { clearCache } = useGameResultsCache();
  const { daysBack } = useTimeFilter();
  const loading = ref(true);

  const gameStats = ref(new Map<number, IStats>());
  const gameResults1Year = ref([] as IGameResult[]);
  const gameResultsTimeFiltered = ref([] as IGameResult[]);
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    if (username.value) {
      loading.value = true;
      gameResults1Year.value = await gameService.fetchGamesByDaysBack(365, username.value);
      filterGameResultsByDate(subDays(new Date(), daysBack.value));

      gameStats.value = filterGameStatsByTimeClass();
      loading.value = false;
    }
  };
  onMounted(fetchGameStats);

  const filterGameStatsByTimeClass = (): Map<number, IStats> => {
    return statisticService.mapResultsToHours(
      gameResultsTimeFiltered.value.filter((gr) => {
        return selectedClasses.value.has(gr.timeClass);
      }),
    );
  };

  const filterGameResultsByDate = (tilDate: Date) => {
    let i = gameResults1Year.value.length;
    while (i > 0 && isBefore(tilDate, gameResults1Year.value[i - 1].timestamp)) {
      --i;
    }
    gameResultsTimeFiltered.value = gameResults1Year.value.slice(i);
  };

  const timeFilterChanged = () => {
    loading.value = true;

    gameStats.value = filterGameStatsByTimeClass();

    nextTick(() => {
      loading.value = false;
    });
  };

  watch(selectedYear, fetchGameStats);
  watch(selectedClasses.value, timeFilterChanged);
  watch(daysBack, () => {
    filterGameResultsByDate(subDays(new Date(), daysBack.value));
    timeFilterChanged();
  });

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
