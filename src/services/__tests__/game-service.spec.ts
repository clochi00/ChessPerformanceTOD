import { beforeEach, describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockGameAdapter } from '@/data/game-adapter.mock';
import mockGameDTOs from '@/model/dto/game-dto.mock';
import { EChessColor, EGameResult } from '@/model/entity';
import { spyOn } from 'tinyspy';

describe('>> Game Service', () => {
  const mockAdapter = mockGameAdapter();
  const undertest = new GameService(mockAdapter);

  describe('> fetchGamesForUserByYearAndMonth', () => {
    it('maps the entities correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue([]);
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValueOnce(mockGameDTOs());
      const result = await undertest.fetchGamesByYear(2022, 'clochi');
      expect(result.length).toEqual(mockGameDTOs().length);
      expect(result[0].result).toEqual(EGameResult.LOSE);
      expect(result[0].color).toEqual(EChessColor.BLACK);
      expect(result[0].timestamp).toEqual(mockGameDTOs()[0].endTime);
      expect(result[1].result).toEqual(EGameResult.DRAW);
      expect(result[1].color).toEqual(EChessColor.WHITE);
      expect(result[1].timestamp).toEqual(mockGameDTOs()[1].endTime);
    });

    it('calls adapter for all 12 months when called with a past year', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue([]);
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByYear(2021, 'clochi');

      expect(spied.callCount).toEqual(12);
    });
  });
});
