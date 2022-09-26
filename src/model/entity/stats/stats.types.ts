import type { IGameResult } from '../game-result';

export interface IStats {
  wins: number;
  losses: number;
  draws: number;

  addToStats(result: IGameResult): void;
}
