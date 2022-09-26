import type { IGameAdapter } from '@/data/game-adapter.types';
import type { IGameResult } from '@/model/entity';
import type { IGameService } from './game-service.types';

export class GameService implements IGameService {
  constructor(private readonly gameAdapter: IGameAdapter) {
    console.log('Service constructed');
  }

  async fetchGamesByYear(year: number, username: string): Promise<IGameResult[]> {
    return Promise.resolve([]);
  }
}
