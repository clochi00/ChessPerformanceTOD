import type { ETimeClass } from '@/model/dto/game-dto.types';
import type { IGameResult } from '@/model/entity/game-result';
import type { SpyInstance } from 'vitest';

export interface IGameService {
  fetchGamesByYear(year: number, username: string, timeClasses?: ETimeClass[]): Promise<IGameResult[]>;
}

export interface IGameServiceMock {
  fetchGamesByYear: SpyInstance;
}
