import type { IGameDTO } from '@/model/dto/game-dto.types';
import type { Mock } from 'vitest';

export interface IGameAdapter {
  fetchGamesForUserByYearAndMonth(username: string, year: number, month: number): Promise<IGameDTO[]>;
}

export interface IGameAdapterMock {
  fetchGamesForUserByYearAndMonth: Mock;
}
