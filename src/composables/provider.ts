import { PlayerAdapter } from '@/data/player-adapter';
import { GameService } from '@/services';
import { PlayerService } from '@/services/playerservice/player-service';
import type { IProvider } from '@/services/provider/provider.types';
import { StatisticService } from '@/services/statsservice/statistic-service';

const playerAdapter = new PlayerAdapter();
const gameService = new GameService(playerAdapter);
const playerService = new PlayerService(playerAdapter);
const statService = new StatisticService();

const useProvider = (): IProvider => ({
  gameService: gameService,
  statisticService: statService,
  playerService: playerService,
});
export { useProvider };
