import type { IGameResult } from '@/model/entity/game-result';

export interface IStatisticService {
  mapResultsToHours(results: IGameResult[]): number;
}
