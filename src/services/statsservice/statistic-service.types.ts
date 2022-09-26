import type { IStats, IGameResult } from '@/model/entity';
import type { Mock } from 'vitest';

export interface IStatisticService {
  mapResultsToHours(results: IGameResult[]): Map<number, IStats>;
}

export interface IStatisticServiceMock {
  mapResultsToHours: Mock;
}
