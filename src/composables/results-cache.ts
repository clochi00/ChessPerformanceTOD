import type { IGameResult } from '@/model/entity';
import { useProvider } from './provider';

export const useGameResultsCache = () => {
  console.log('>>> useGameResultsCache()');

  const cache = new Map<number, IGameResult[]>();

  const { gameService } = useProvider();

  const fetchGameResultsByYear = async (year: number, username: string): Promise<IGameResult[]> => {
    if (!cache.has(year)) {
      console.log(year + ' not in cache. fetching...');
      cache.set(year, await gameService.fetchGamesByYear(year, username));
    } else {
      console.log('getting ' + year + ' from Cache');
    }
    return cache.get(year)!;
  };

  const clearCache = () => {
    cache.clear();
  };

  return {
    fetchGameResultsByYear,
    clearCache,
  };
};
