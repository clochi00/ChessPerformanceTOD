import type { IGameDTO, IGamesWrapperDTO } from '@/model/dto/game/game-dto.types';
import type { IPlayerAdapter } from './player-adapter.types';
import axios from 'axios';
import type { IAPIResponse } from '@/model/entity/api-response/api-response.types';
import type { IPlayerDTO } from '@/model/dto/player/player-dto.types';

export class PlayerAdapter implements IPlayerAdapter {
  async fetchGamesForUserByYearAndMonth(
    username: string,
    year: number,
    month: number,
  ): Promise<IAPIResponse<IGameDTO[]>> {
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

      return {
        data: data.games ?? [],
        statuscode: status,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: [],
          statuscode: error.response?.status,
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

  async fetchUserByName(username: String): Promise<IAPIResponse<IPlayerDTO>> {
    try {
      const { data, status } = await axios.get<IPlayerDTO>(`https://api.chess.com/pub/player/${username}`, {
        headers: {
          Accept: 'application/json',
        },
      });

      return {
        data: data,
        statuscode: status,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          statuscode: error.response?.status,
          errorMessage: error.message,
        };
      } else {
        return {
          errorMessage: 'unexpected error: ' + error,
        };
      }
    }
  }
}
