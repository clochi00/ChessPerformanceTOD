import { afterEach, describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockPlayerAdapter } from '@/data/player-adapter.mock';
import mockGameDTOs from '@/model/dto/game/game-dto.mock';
import { EChessColor, EGameResult } from '@/model/entity';
import { spyOn } from 'tinyspy';
import { fromUnixTime } from 'date-fns';
import { mockApiResponseGameDTOsOk, mockApiResponseGameDTOsEmpty } from '@/model/entity';

describe('>> Game Service', () => {
  let mockAdapter = mockPlayerAdapter();
  let undertest = new GameService(mockAdapter);
  mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());

  describe('> fetchGamesForUserByYearAndMonth', () => {
    afterEach(() => {
      mockAdapter = mockPlayerAdapter();
      undertest = new GameService(mockAdapter);
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());
    });

    it('maps the entities correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      const result = await undertest.fetchGamesByYear(2022, 'clochi');
      expect(result.length).toEqual(mockGameDTOs().length);
      expect(result[0].result).toEqual(EGameResult.LOSE);
      expect(result[0].color).toEqual(EChessColor.BLACK);
      expect(result[0].timestamp).toEqual(fromUnixTime(mockGameDTOs()[0].end_time));
      expect(result[1].result).toEqual(EGameResult.DRAW);
      expect(result[1].color).toEqual(EChessColor.WHITE);
      expect(result[1].timestamp).toEqual(fromUnixTime(mockGameDTOs()[1].end_time));
    });

    it('calls adapter for all 12 months when called with a past year', async () => {
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByYear(2021, 'clochi');
      expect(spied.callCount).toEqual(12);
    });
  });
});
