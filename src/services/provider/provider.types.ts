import type { IGameService, IGameServiceMock } from '../gameservice';
import type { IStatisticService } from '../statsservice';

export interface IProvider {
  gameService: IGameService;
  statisticService: IStatisticService;
}

export interface IProviderMock {
  gameService: IGameServiceMock;
  statisticService: IStatisticService;
}
