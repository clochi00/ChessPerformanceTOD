import { afterEach, describe, expect, it } from 'vitest';
import { GameService } from '../game-service';
import { mockPlayerAdapter } from '@/data/player-adapter.mock';
import { spyOn } from 'tinyspy';
import { mockApiResponseGameDTOsEmpty } from '@/model/entity';

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

    it('calls adapter for 13 times when going back 1 year', async () => {
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByDaysBack(365, 'clochi');
      expect(spied.callCount).toEqual(13);
    });

    it('calls adapter once when going back 5 days', async () => {
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByDaysBack(5, 'clochi');
      expect(spied.callCount).toEqual(1);
    });

    it('calls adapter twice when going back 32 days', async () => {
      const spied = spyOn(mockAdapter, 'fetchGamesForUserByYearAndMonth');
      await undertest.fetchGamesByDaysBack(32, 'clochi');
      expect(spied.callCount).toEqual(2);
    });
  });
});
