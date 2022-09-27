import type { IGameResult } from '@/model/entity/game-result';
import type { SpyInstance } from 'vitest';

export interface IGameService {
  fetchGamesByYear(year: number, username: string): Promise<IGameResult[]>;
}

export interface IGameServiceMock {
  fetchGamesByYear: SpyInstance;
}
