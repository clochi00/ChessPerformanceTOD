import { ETimeClass } from '@/model/dto/game-dto.types';
import type { IGameResult, IStats } from '@/model/entity';
import { getYear } from 'date-fns';
import { onMounted, ref, watch } from 'vue';
import { useProvider } from './provider';

const selectedClasses = ref(new Set<ETimeClass>([ETimeClass.RAPID, ETimeClass.BLITZ, ETimeClass.BULLET]));
const username = ref(undefined as string | undefined);
export const useStats = () => {
  const { gameService, statisticService } = useProvider();
  const loading = ref(true);

  const gameStats = ref(new Map<number, IStats>());
  const gameResults = ref([] as IGameResult[]);
  const selectedYear = ref(getYear(new Date()));

  const fetchGameStats = async () => {
    if (username.value) {
      loading.value = true;
      gameResults.value = await gameService.fetchGamesByYear(selectedYear.value, username.value);
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

  watch(selectedYear, fetchGameStats);
  watch(selectedClasses.value, () => {
    gameStats.value = filterGameStatsByTimeClass();
  });

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
