export interface IGameResultDTO {
  rating: number;
  result: string;
  username: string;
  id: string;
  uuid: string;
}
export interface IGameDTO {
  timeClass: string;
  timeControl: number;
  endTime: number;
  rated: boolean;
  accuracies?: {
    white: number;
    black: number;
  };
  rules: string;
  white: IGameResultDTO;
  black: IGameResultDTO;
}
