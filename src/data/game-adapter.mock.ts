import { vi } from 'vitest';
import type { IGameAdapterMock } from './game-adapter.types';

export const mockGameAdapter = (): IGameAdapterMock => ({
  fetchGamesForUserByYearAndMonth: vi.fn(),
});
