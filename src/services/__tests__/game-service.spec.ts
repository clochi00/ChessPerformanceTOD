import { describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockGameAdapter } from '@/data/game-adapter.mock';
import mockGameDTOs from '@/model/dto/game-dto.mock';

describe('>> Game Service', () => {
  const mockAdapter = mockGameAdapter();
  const undertest = new GameService(mockAdapter);

  describe('> fetchGamesForUserByYearAndMonth', () => {
    it('maps the entities correctly', async () => {
      mockAdapter.fetchGamesForUserByYearAndMonth.mockResolvedValue([]);
      const result = await undertest.fetchGamesByYear(2022, 'clochi');
      expect(result.length).toEqual(mockGameDTOs().length);
    });
  });
});
