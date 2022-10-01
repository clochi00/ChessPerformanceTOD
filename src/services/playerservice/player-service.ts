import type { IPlayerAdapter } from '@/data';
import type { IPlayerDTO } from '@/model/dto/player/player-dto.types';
import type { IAPIResponse } from '@/model/entity';
import type { IPlayerService } from './player-service.types';

export class PlayerService implements IPlayerService {
  constructor(private readonly playerAdapter: IPlayerAdapter) {}

  getPlayerByName(username: string): Promise<IAPIResponse<IPlayerDTO>> {
    return this.playerAdapter.fetchUserByName(username);
  }
}
