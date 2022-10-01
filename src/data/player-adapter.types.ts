import type { IGameDTO } from '@/model/dto/game/game-dto.types';
import type { IPlayerDTO } from '@/model/dto/player/player-dto.types';
import type { IAPIResponse } from '@/model/entity/api-response/api-response.types';
import type { Mock } from 'vitest';

export interface IPlayerAdapter {
  fetchGamesForUserByYearAndMonth(username: string, year: number, month: number): Promise<IAPIResponse<IGameDTO[]>>;
  fetchUserByName(username: String): Promise<IAPIResponse<IPlayerDTO>>;
}

export interface IPlayerAdapterMock {
  fetchGamesForUserByYearAndMonth: Mock;
  fetchUserByName: Mock;
}
