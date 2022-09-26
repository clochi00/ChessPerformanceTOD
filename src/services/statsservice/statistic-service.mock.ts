import { vi } from 'vitest';
import type { IStatisticServiceMock } from './statistic-service.types';

export const mockStatisticService = (): IStatisticServiceMock => ({
  mapResultsToHours: vi.fn(),
});
