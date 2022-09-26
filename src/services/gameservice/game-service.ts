import type { IGameAdapter } from '@/data/game-adapter.types';
import { getYear, getMonth } from 'date-fns';

import { GameResult, type IGameResult } from '@/model/entity/game-result';

import type { IGameService } from './game-service.types';

export class GameService implements IGameService {
  constructor(private readonly gameAdapter: IGameAdapter) {
    console.log('Service constructed');
  }

  async fetchGamesByYear(year: number, username: string): Promise<IGameResult[]> {
    const result: IGameResult[] = [];
    const maxMonth = this.getMaxMonthForYear(year);
    for (let month = 1; month <= maxMonth; ++month) {
      const gameDTOs = await this.gameAdapter.fetchGamesForUserByYearAndMonth(username, year, month);
      for (const dto of gameDTOs) {
        result.push(new GameResult(dto, username));
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
