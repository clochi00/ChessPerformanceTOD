import type { IGameDTO } from '../dto/game-dto.types';
import { EChessColor, EGameResult, type IGameResult } from './game-result.types';

export class GameResult implements IGameResult {
  timestamp: number;
  result: EGameResult;
  color: EChessColor;

  constructor(dto: IGameDTO, username: string) {
    this.timestamp = dto.endTime;
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
