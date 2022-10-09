import type { IPlayerAdapter } from '@/data/player-adapter.types';
import { getYear, getMonth, subDays, isBefore, differenceInCalendarMonths } from 'date-fns';

import { GameResult, type IGameResult } from '@/model/entity/game-result';

import type { IGameService } from '@/services';
import { useLoadingProgress } from '@/composables/loading-progress';
import { ETimeClass, type IGameDTO } from '@/model/dto/game';

export class GameService implements IGameService {
  constructor(private readonly gameAdapter: IPlayerAdapter) {}

  async fetchGamesByDaysBack(daysBack: number, username: string): Promise<IGameResult[]> {
    const { resetProgress } = useLoadingProgress();

    resetProgress();
    let result: IGameResult[] = [];
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate) + 1;
    const currentYear = getYear(currentDate);
    const endDate = subDays(currentDate, daysBack);
    const tilYear = getYear(endDate);
    const progressChunk = this.getProgressChunk(endDate);
    for (let year = tilYear; year <= currentYear; ++year) {
      const startMonth = year === tilYear ? getMonth(endDate) + 1 : 1;
      const tilMonth = year === currentYear ? currentMonth : 12;

      result = result.concat(await this.fetchGamesForYear(startMonth, tilMonth, year, username, progressChunk));
    }

    result = this.deleteResultsBeforeEnddate(result, endDate);
    return result;
  }

  private getProgressChunk(endDate: Date): number {
    const monthsDifference = differenceInCalendarMonths(new Date(), endDate);
    return 100 / (monthsDifference + 1);
  }

  private deleteResultsBeforeEnddate(result: IGameResult[], endDate: Date) {
    let i = 0;
    while (result.length > i && isBefore(result[i].timestamp, endDate)) {
      ++i;
    }
    return result.slice(i);
  }

  private async fetchGamesForYear(
    startMonth: number,
    tilMonth: number,
    year: number,
    username: string,
    progressChunk: number,
  ): Promise<IGameResult[]> {
    const result: IGameResult[] = [];
    const { addToProgress } = useLoadingProgress();
    for (let month = startMonth; month <= tilMonth; ++month) {
      addToProgress(progressChunk);

      const response = await this.gameAdapter.fetchGamesForUserByYearAndMonth(username, year, month);

      if (response.data) {
        for (const dto of response.data) {
          if (this.resultCounts(dto)) {
            result.push(new GameResult(dto, username));
          }
        }
      }
    }
    return result;
  }

  private resultCounts(dto: IGameDTO): boolean {
    return dto.time_class != ETimeClass.DAILY && dto.rated;
  }
}
