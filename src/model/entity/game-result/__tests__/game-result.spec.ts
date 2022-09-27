import mockGameDTOs from '@/model/dto/game-dto.mock';

import { describe, expect, it } from 'vitest';
import { GameResult } from '../game-result';
import { EChessColor, EGameResult } from '../game-result.types';

describe('>> GameResult', () => {
  it('maps its values correctly on instantiation', () => {
    let underTest = new GameResult(mockGameDTOs()[0], 'clochi');
    expect(underTest.color).toEqual(EChessColor.BLACK);
    expect(underTest.result).toEqual(EGameResult.LOSE);

    underTest = new GameResult(mockGameDTOs()[1], 'merimacuill');
    expect(underTest.color).toEqual(EChessColor.BLACK);
    expect(underTest.result).toEqual(EGameResult.DRAW);

    underTest = new GameResult(mockGameDTOs()[2], 'clochi');
    expect(underTest.color).toEqual(EChessColor.WHITE);
    expect(underTest.result).toEqual(EGameResult.WIN);
  });
});
