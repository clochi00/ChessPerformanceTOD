import mockGameDTOs from '@/model/dto/game/game-dto.mock';
import type { IGameDTO } from '@/model/dto/game/game-dto.types';
import type { IAPIResponse } from './api-response.types';

export const mockApiResponseGameDTOsOk = (): IAPIResponse<IGameDTO[]> => ({
  data: mockGameDTOs(),
  statuscode: 200,
});

export const mockApiResponseGameDTOsEmpty = (): IAPIResponse<IGameDTO[]> => ({
  data: [],
  statuscode: 200,
});

export const mockApiResponseGameDTOsError = (): IAPIResponse<IGameDTO[]> => ({
  data: [],
  statuscode: 400,
  errorMessage: 'Error fetching from API',
});
