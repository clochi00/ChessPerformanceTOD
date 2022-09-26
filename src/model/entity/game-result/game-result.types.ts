export enum EGameResult {
  WIN = 'Win',
  LOSE = 'Lose',
  DRAW = 'Draw',
}

export enum EChessColor {
  WHITE = 0,
  BLACK = 1,
}

export interface IGameResult {
  timestamp: Date;
  result: EGameResult;
  color: EChessColor;
}
