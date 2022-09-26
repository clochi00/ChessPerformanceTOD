import { EChessColor, EGameResult, type IGameResult } from './game-result.types';

const mockGameResults = (): IGameResult[] => [
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: 1609488154,
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.WIN,
    timestamp: 1609495096,
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.LOSE,
    timestamp: 1609513334,
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: 1609536503,
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.LOSE,
    timestamp: 1609589330,
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: 1609749742,
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.WIN,
    timestamp: 1609756403,
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.LOSE,
    timestamp: 1609834434,
  },
  {
    color: EChessColor.WHITE,
    result: EGameResult.WIN,
    timestamp: 1609836301,
  },
  {
    color: EChessColor.BLACK,
    result: EGameResult.LOSE,
    timestamp: 1609838361,
  },
];

export default mockGameResults;
