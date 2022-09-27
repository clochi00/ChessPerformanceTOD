import { afterEach, describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockGameAdapter } from '@/data/game-adapter.mock';
import mockGameDTOs from '@/model/dto/game-dto.mock';
import { EChessColor, EGameResult } from '@/model/entity';
import { spyOn } from 'tinyspy';
import { fromUnixTime } from 'date-fns';
import { mockApiResponseGameDTOsOk, mockApiResponseGameDTOsEmpty } from '@/model/entity';
import { ETimeClass } from '@/model/dto/game-dto.types';

describe('>> Game Service', () => {
  let mockAdapter = mockGameAdapter();
  let undertest = new GameService(mockAdapter);
  mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());

  describe('> fetchGamesForUserByYearAndMonth', () => {
    afterEach(() => {
      mockAdapter = mockGameAdapter();
      undertest = new GameService(mockAdapter);
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue(mockApiResponseGameDTOsEmpty());
    });

    it('maps the entities correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      const result = await undertest.fetchGamesByYear(2022, 'clochi', new Set());
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
      await undertest.fetchGamesByYear(2021, 'clochi', new Set());
      expect(spied.callCount).toEqual(12);
    });

    it('filters out non matching time classes correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      let result = await undertest.fetchGamesByYear(2022, 'clochi', new Set([ETimeClass.BULLET]));
      expect(result.length).toEqual(1);
      expect(result[0].result).toEqual(EGameResult.LOSE);
      expect(result[0].color).toEqual(EChessColor.BLACK);

      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      result = await undertest.fetchGamesByYear(2022, 'clochi', new Set([ETimeClass.BLITZ]));
      expect(result.length).toEqual(1);
      expect(result[0].result).toEqual(EGameResult.WIN);
      expect(result[0].color).toEqual(EChessColor.BLACK);

      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      result = await undertest.fetchGamesByYear(2022, 'clochi', new Set([ETimeClass.BULLET, ETimeClass.BLITZ]));
      expect(result.length).toEqual(2);

      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockApiResponseGameDTOsOk());
      result = await undertest.fetchGamesByYear(2022, 'clochi', new Set([ETimeClass.RAPID, ETimeClass.BLITZ]));
      expect(result.length).toEqual(mockGameDTOs().length - 1);
    });
  });
});
