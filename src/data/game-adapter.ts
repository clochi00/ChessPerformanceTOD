import type { IGameDTO, IGamesWrapperDTO } from '@/model/dto/game-dto.types';
import type { IGameAdapter } from './game-adapter.types';
import axios from 'axios';
import type { IAPIResponse } from '@/model/entity/api-response/api-response.types';

export class GameAdapter implements IGameAdapter {
  async fetchGamesForUserByYearAndMonth(
    username: string,
    year: number,
    month: number,
  ): Promise<IAPIResponse<IGameDTO[]>> {
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    try {
      const { data } = await axios.get<IGamesWrapperDTO>(
        `https://api.chess.com/pub/player/${username}/games/${year}/${monthStr}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      return {
        data: data.games ?? [],
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: [],
          errorMessage: error.message,
        };
      } else {
        return {
          data: [],
          errorMessage: 'unexpected error: ' + error,
        };
      }
    }
  }
}
