import type { IPlayerDTO } from '@/model/dto/player/player-dto.types';
import type { IAPIResponse } from '@/model/entity';
import type { Mock } from 'vitest';

export interface IPlayerService {
  getPlayerByName(username: string): Promise<IAPIResponse<IPlayerDTO>>;
}

export interface IPlayerServiceMock {
  getPlayerByName: Mock;
}
