import type { IGameService, IGameServiceMock } from '../gameservice';
import type { IPlayerService, IPlayerServiceMock } from '../playerservice';
import type { IStatisticService, IStatisticServiceMock } from '../statsservice';

export interface IProvider {
  gameService: IGameService;
  statisticService: IStatisticService;
  playerService: IPlayerService;
}

export interface IProviderMock {
  gameService: IGameServiceMock;
  statisticService: IStatisticServiceMock;
  playerService: IPlayerServiceMock;
}
