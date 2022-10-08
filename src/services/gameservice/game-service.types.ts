import type { IGameResult } from '@/model/entity/game-result';
import type { SpyInstance } from 'vitest';

export interface IGameService {
  fetchGamesByDaysBack(daysBack: number, username: string): Promise<IGameResult[]>;
}

export interface IGameServiceMock {
  fetchGamesByDaysBack: SpyInstance;
}
