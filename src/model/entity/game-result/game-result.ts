import type { ETimeClass, IGameDTO } from '@/model/dto/game-dto.types';
import { fromUnixTime } from 'date-fns';

import { EChessColor, EGameResult, type IGameResult } from './game-result.types';

export class GameResult implements IGameResult {
  timestamp: Date;
  result: EGameResult;
  color: EChessColor;
  timeClass: ETimeClass;

  constructor(dto: IGameDTO, username: string) {
    this.timestamp = fromUnixTime(dto.end_time);
    this.timeClass = dto.time_class;
    this.color = dto.white.username == username ? EChessColor.WHITE : EChessColor.BLACK;
    const playerResult = this.color === EChessColor.WHITE ? dto.white.result : dto.black.result;

    switch (playerResult) {
      case 'win':
        this.result = EGameResult.WIN;
        break;
      case 'repetition':
      case 'insufficient':
      case 'stalemate':
      case 'agreed':
      case '50move':
        this.result = EGameResult.DRAW;
        break;
      default:
        this.result = EGameResult.LOSE;
    }
  }
}
