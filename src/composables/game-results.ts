import { isBefore, subDays } from 'date-fns';
import { nextTick, onMounted, ref, watch } from 'vue';
import type { IGameResult, IStats } from '@/model/entity';
import { ETimeClass } from '@/model/dto/game';
import { useProvider } from '@/composables/provider';
import { useTimeFilter } from '@/composables/timefilter';

const selectedClasses = ref(new Set<ETimeClass>([ETimeClass.RAPID, ETimeClass.BLITZ, ETimeClass.BULLET]));
const username = ref(undefined as string | undefined);
export const useGameResults = () => {
  console.log('>>> useGameResults()');
  const gameResults1Year = ref([] as IGameResult[]);
  const gameResultsTimeFiltered = ref([] as IGameResult[]);
  const gameStats = ref(new Map<number, IStats>());
  const loading = ref(true);
  const { gameService, statisticService } = useProvider();
  const { daysBack } = useTimeFilter();

  const fetchGameResults = async () => {
    if (username.value) {
      loading.value = true;
      gameResults1Year.value = await gameService.fetchGamesByDaysBack(365, username.value);
      filterGameResults();
      loading.value = false;
    }
  };

  onMounted(fetchGameResults);

  const setUsername = (user: string) => {
    username.value = user;
  };

  const filterGameResultsByTimeClass = (results: IGameResult[]): IGameResult[] => {
    return results.filter((gr) => {
      return selectedClasses.value.has(gr.timeClass);
    });
  };

  const filterGameResultsByDate = (results: IGameResult[], tilDate: Date): IGameResult[] => {
    let i = results.length;
    while (i > 0 && isBefore(tilDate, results[i - 1].timestamp)) {
      --i;
    }
    return results.slice(i);
  };

  const mapResultsToStats = () => {
    loading.value = true;
    gameStats.value = statisticService.mapResultsToHours(gameResultsTimeFiltered.value);
    nextTick(() => {
      loading.value = false;
    });
  };

  const filterGameResults = () => {
    gameResultsTimeFiltered.value = filterGameResultsByTimeClass(
      filterGameResultsByDate(gameResults1Year.value, subDays(new Date(), daysBack.value)),
    );
  };

  watch(gameResultsTimeFiltered, mapResultsToStats);

  watch(selectedClasses.value, filterGameResults);
  watch(daysBack, filterGameResults);

  return {
    loading,
    setUsername,
    selectedClasses,
    gameStats,
  };
};
