export enum EGameResult {
  WIN = 0,
  LOSE = 1,
  DRAW = 2,
}

export enum EChessColor {
  WHITE = 0,
  BLACK = 1,
}

export interface IGameResult {
  timestamp: number;
  result: EGameResult;
  color: EChessColor;
}
