import type { IGameDTO } from '@/model/dto/game-dto.types';
import type { IAPIResponse } from '@/model/entity/api-response/api-response.types';
import type { Mock } from 'vitest';

export interface IGameAdapter {
  fetchGamesForUserByYearAndMonth(username: string, year: number, month: number): Promise<IAPIResponse<IGameDTO[]>>;
}

export interface IGameAdapterMock {
  fetchGamesForUserByYearAndMonth: Mock;
}
