import { describe, it, expect } from 'vitest';
import { StatisticService } from '../statistic-service';
import mockGameResults from '@/model/entity/game-result/game-result.mock';

describe('>> Statistic Service', () => {
  describe('> mapResultsToHours()', () => {
    const underTest = new StatisticService();
    it('maps results correctly', () => {
      const result = underTest.mapResultsToHours(mockGameResults());
      expect(result.has(12)).toBeTruthy();
      expect(result.has(11)).toBeTruthy();
      expect(result.has(9)).toBeTruthy();
      expect(result.has(10)).toBeTruthy();
      expect(result.has(5)).toBeTruthy();
      expect(result.has(18)).toBeTruthy();
      expect(result.has(17)).toBeFalsy();
      expect(result.has(4)).toBeFalsy();

      expect(result.get(12)?.wins).toEqual(1);
      expect(result.get(12)?.losses).toEqual(0);
      expect(result.get(12)?.draws).toEqual(1);

      expect(result.get(9)?.wins).toEqual(1);
      expect(result.get(9)?.losses).toEqual(0);
      expect(result.get(9)?.draws).toEqual(0);

      expect(result.get(11)?.wins).toEqual(1);
      expect(result.get(11)?.losses).toEqual(0);
      expect(result.get(11)?.draws).toEqual(0);

      expect(result.get(5)?.wins).toEqual(0);
      expect(result.get(5)?.losses).toEqual(1);
      expect(result.get(5)?.draws).toEqual(0);

      expect(result.get(10)?.wins).toEqual(0);
      expect(result.get(10)?.losses).toEqual(1);
      expect(result.get(10)?.draws).toEqual(0);

      expect(result.get(18)?.wins).toEqual(2);
      expect(result.get(18)?.losses).toEqual(1);
      expect(result.get(18)?.draws).toEqual(0);
    });
  });
});
