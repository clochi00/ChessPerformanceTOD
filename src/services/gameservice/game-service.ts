import type { IPlayerAdapter } from '@/data/player-adapter.types';
import { getYear, getMonth } from 'date-fns';

import { GameResult, type IGameResult } from '@/model/entity/game-result';

import type { IGameService } from './game-service.types';
import { useLoadingProgress } from '@/composables/loading-progress';

export class GameService implements IGameService {
  constructor(private readonly gameAdapter: IPlayerAdapter) {
    console.log('Service constructed');
  }

  async fetchGamesByYear(year: number, username: string): Promise<IGameResult[]> {
    const { resetProgress, addToProgress } = useLoadingProgress();
    resetProgress();
    const result: IGameResult[] = [];
    const maxMonth = this.getMaxMonthForYear(year);
    const progressChunk = 100 / maxMonth;

    for (let month = 1; month <= maxMonth; ++month) {
      addToProgress(progressChunk);
      const response = await this.gameAdapter.fetchGamesForUserByYearAndMonth(username, year, month);

      if (response.data) {
        for (const dto of response.data) {
          result.push(new GameResult(dto, username));
        }
      }
    }
    return result;
  }

  private getMaxMonthForYear(year: number): number {
    const currentDate = new Date();
    const currentYear = getYear(currentDate);
    if (year == currentYear) {
      return getMonth(currentDate) + 1;
    }
    return 12;
  }
}
