import type { IGameDTO, IGamesWrapperDTO } from '@/model/dto/game-dto.types';
import type { IGameAdapter } from './game-adapter.types';
import axios from 'axios';

export class GameAdapter implements IGameAdapter {
  async fetchGamesForUserByYearAndMonth(username: string, year: number, month: number): Promise<IGameDTO[]> {
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    try {
      const { data, status } = await axios.get<IGamesWrapperDTO>(
        `https://api.chess.com/pub/player/${username}/games/${year}/${monthStr}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      console.log('status is: ' + status);
      return data.games;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return [];
      } else {
        console.log('unexpected error: ', error);
        return [];
      }
    }
  }
}
