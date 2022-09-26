import { GameAdapter } from '@/data/game-adapter';
import { GameService } from '@/services';
import type { IProvider } from '@/services/provider/provider.types';
import { StatisticService } from '@/services/statsservice/statistic-service';

const gameService = new GameService(new GameAdapter());
const statService = new StatisticService();
const useProvider = (): IProvider => ({
  gameService: gameService,
  statisticService: statService,
});
export { useProvider };
