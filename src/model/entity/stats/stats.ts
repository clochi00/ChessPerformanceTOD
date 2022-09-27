import { EGameResult, type IGameResult } from '../game-result';
import type { IStats } from './stats.types';

export class Stats implements IStats {
  wins: number;
  losses: number;
  draws: number;

  constructor() {
    this.wins = 0;
    this.losses = 0;
    this.draws = 0;
  }

  addToStats(gameResult: IGameResult) {
    switch (gameResult.result) {
      case EGameResult.WIN:
        ++this.wins;
        break;
      case EGameResult.DRAW:
        ++this.draws;
        break;
      case EGameResult.LOSE:
        ++this.losses;
    }
  }

  getWLRation(): number {
    return this.wins - this.losses;
  }
}
