export interface IGameResultDTO {
  rating: number;
  result: string;
  username: string;
  id: string;
  uuid: string;
}
export interface IGameDTO {
  time_class: string;
  time_control: number;
  end_time: number;
  rated: boolean;
  accuracies?: {
    white: number;
    black: number;
  };
  rules: string;
  white: IGameResultDTO;
  black: IGameResultDTO;
}

export interface IGamesWrapperDTO {
  games: IGameDTO[];
}
