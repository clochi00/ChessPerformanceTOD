import { vi } from 'vitest';
import type { IPlayerAdapterMock } from './player-adapter.types';

export const mockPlayerAdapter = (): IPlayerAdapterMock => ({
  fetchGamesForUserByYearAndMonth: vi.fn(),
});
