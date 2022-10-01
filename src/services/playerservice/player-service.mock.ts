import { vi } from 'vitest';
import type { IPlayerService } from './player-service.types';

export const mockPlayerService = (): IPlayerService => ({
  getPlayerByName: vi.fn(),
});
