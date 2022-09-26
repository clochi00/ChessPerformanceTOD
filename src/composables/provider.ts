import { GameAdapter } from '@/data/game-adapter';
import { GameService } from '@/services';
import type { IProvider } from '@/services/provider/provider.types';

const gameService = new GameService(new GameAdapter());
const useProvider = (): IProvider => ({
  gameService: gameService,
});
export { useProvider };
