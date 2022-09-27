import mockGameDTOs from '@/model/dto/game-dto.mock';
import type { IGameDTO } from '@/model/dto/game-dto.types';
import type { IAPIResponse } from './api-response.types';

export const mockApiResponseGameDTOsOk = (): IAPIResponse<IGameDTO[]> => ({
  data: mockGameDTOs(),
});

export const mockApiResponseGameDTOsEmpty = (): IAPIResponse<IGameDTO[]> => ({
  data: [],
});

export const mockApiResponseGameDTOsError = (): IAPIResponse<IGameDTO[]> => ({
  data: [],
  errorMessage: 'Error fetching from API',
});
