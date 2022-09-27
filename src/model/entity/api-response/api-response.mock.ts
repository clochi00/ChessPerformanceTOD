import type { GameResult } from '../game-result';
import mockGameResults from '../game-result/game-result.mock';
import type { IAPIResponse } from './api-response.types';

export const mockApiResponseGameResultsOk = (): IAPIResponse<GameResult[]> => ({
  data: mockGameResults(),
});

export const mockApiResponseGameResultsError = (): IAPIResponse<GameResult[]> => ({
  data: [],
  errorMessage: 'Error fetching from API',
});
