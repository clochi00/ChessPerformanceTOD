import { Stats, type IGameResult, type IStats } from '@/model/entity';
import { getHours } from 'date-fns';

import type { IStatisticService } from './statistic-service.types';

export class StatisticService implements IStatisticService {
  mapResultsToHours(results: IGameResult[]): Map<number, IStats> {
    const stats = new Map<number, IStats>();
    for (const gameResult of results) {
      const hour = getHours(gameResult.timestamp);

      if (!stats.has(hour)) {
        stats.set(hour, new Stats());
      }
      stats.get(hour)?.addToStats(gameResult);
    }
    return stats;
  }
}
