import { EChessColor, EGameResult, type IGameResult } from './game-result.types';

const mockGameResults = (): IGameResult[] => [
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: new Date(2022, 1, 15, 12, 32, 44), // 12
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.WIN,
    timestamp: new Date(2022, 2, 9, 9, 11, 14), // 9
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.LOSE,
    timestamp: new Date(2022, 2, 9, 10, 21, 0), // 10
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.DRAW,
    timestamp: new Date(2022, 2, 11, 12, 0, 0), // 12
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.LOSE,
    timestamp: new Date(2022, 3, 1, 5, 40, 11), // 5
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: new Date(2022, 3, 3, 18, 9, 44), // 18
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.WIN,
    timestamp: new Date(2022, 3, 8, 18, 55, 1), // 18
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.LOSE,
    timestamp: new Date(2022, 4, 11, 0, 25, 10), // 0
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: new Date(2022, 4, 11, 11, 11, 11), // 11
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.LOSE,
    timestamp: new Date(2022, 4, 12, 18, 32, 44), // 18
  },
];

export default mockGameResults;
