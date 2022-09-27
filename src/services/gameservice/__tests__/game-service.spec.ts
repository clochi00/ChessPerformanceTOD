import { describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockGameAdapter } from '@/data/game-adapter.mock';
import mockGameDTOs from '@/model/dto/game-dto.mock';
import { EChessColor, EGameResult } from '@/model/entity';
import { spyOn } from 'tinyspy';
import { fromUnixTime } from 'date-fns';
import { mockApiResponseGameDTOsOk, mockApiResponseGameDTOsEmpty } from '@/model/entity';

describe('>> Game Service', () => {
  const mockAdapter = mockGameAdapter();
  const undertest = new GameService(mockAdapter);

  describe('> fetchGamesForUserByYearAndMonth', () => {
    it('maps the entities correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());
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
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByYear(2021, 'clochi');

      expect(spied.callCount).toEqual(12);
    });
  });
});
