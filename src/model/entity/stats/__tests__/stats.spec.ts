import { describe, expect, it } from 'vitest';
import mockGameResults from '../../game-result/game-result.mock';
import { Stats } from '../stats';

describe('>> Stats', () => {
  describe('> addToStats()', () => {
    it('adds correctly', () => {
      const stats = new Stats();
      stats.addToStats(mockGameResults()[0]);
      stats.addToStats(mockGameResults()[1]);
      stats.addToStats(mockGameResults()[2]);
      stats.addToStats(mockGameResults()[3]);
      expect(stats.wins).toEqual(2);
      expect(stats.losses).toEqual(1);
      expect(stats.draws).toEqual(1);
    });
  });

  describe('> getWLRatio()', () => {
    it('calculates correctly', () => {
      const stats = new Stats();
      stats.addToStats(mockGameResults()[0]);
      stats.addToStats(mockGameResults()[1]);
      stats.addToStats(mockGameResults()[2]);
      stats.addToStats(mockGameResults()[3]);
      expect(stats.getWLRatio()).toEqual(1);
    });
  });

  describe('> getGameCount()', () => {
    it('calculates correctly', () => {
      const stats = new Stats();
      stats.addToStats(mockGameResults()[0]);
      stats.addToStats(mockGameResults()[1]);
      stats.addToStats(mockGameResults()[2]);
      stats.addToStats(mockGameResults()[3]);
      expect(stats.getGameCount()).toEqual(4);
    });
  });
});
