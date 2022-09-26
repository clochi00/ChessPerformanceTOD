import type { IGameService, IGameServiceMock } from '../gameservice';

export interface IProvider {
  gameService: IGameService;
}

export interface IProviderMock {
  gameService: IGameServiceMock;
}
