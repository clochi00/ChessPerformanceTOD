import { ETimeClass, type IGameDTO } from './game-dto.types';

const mockGameDTOs = (): IGameDTO[] => [
  {
    end_time: 1609488154,
    rated: true,
    accuracies: {
      white: 51.51077253110951,
      black: 41.5311638133435,
    },
    time_class: ETimeClass.BULLET,
    time_control: 600,
    rules: 'chess',
    white: {
      rating: 1058,
      result: 'win',
      id: 'https://api.chess.com/pub/player/ofirloser',
      username: 'ofirloser',
      uuid: '918818b6-3a40-11eb-93b5-253f1dd203dc',
    },
    black: {
      rating: 1034,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
  },
  {
    end_time: 1609495096,
    rated: true,
    accuracies: {
      white: 90.80120022252264,
      black: 26.576431898814228,
    },

    time_class: ETimeClass.RAPID,
    time_control: 600,
    rules: 'chess',
    white: {
      rating: 1042,
      result: 'repetition',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1042,
      result: 'repetition',
      id: 'https://api.chess.com/pub/player/merimacuill',
      username: 'merimacuill',
      uuid: '76897756-27b9-11eb-bf72-1d4c1449b2cb',
    },
  },
  {
    end_time: 1609513334,
    rated: true,
    time_class: ETimeClass.RAPID,
    time_control: 600,
    rules: 'chess',
    white: {
      rating: 1051,
      result: 'win',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1068,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/pd0603',
      username: 'PD0603',
      uuid: '0aa3c692-8e24-11ea-a9b4-ddbd4e325c00',
    },
  },
  {
    end_time: 1609536503,
    rated: true,
    time_class: ETimeClass.RAPID,
    time_control: 600,
    rules: 'chess',
    white: {
      rating: 1116,
      result: 'win',
      id: 'https://api.chess.com/pub/player/trook13',
      username: 'trook13',
      uuid: 'e311e95c-35d9-11eb-90c2-e9365b7b2cb3',
    },
    black: {
      rating: 1044,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
  },
  {
    end_time: 1609589330,
    rated: true,
    accuracies: {
      white: 19.245427789881113,
      black: 87.61217356611353,
    },
    time_control: 600,
    time_class: ETimeClass.RAPID,
    rules: 'chess',
    white: {
      rating: 1035,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1024,
      result: 'win',
      id: 'https://api.chess.com/pub/player/giuseppesavoca',
      username: 'GiuseppeSavoca',
      uuid: 'e0575482-24ea-11ea-8c73-7fa71d3eb01a',
    },
  },
  {
    end_time: 1609749742,
    rated: true,
    accuracies: {
      white: 56.543965922454,
      black: 41.94997638748591,
    },
    time_control: 600,
    time_class: ETimeClass.RAPID,
    rules: 'chess',
    white: {
      rating: 1043,
      result: 'win',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1039,
      result: 'checkmated',
      id: 'https://api.chess.com/pub/player/manyapricot',
      username: 'ManyApricot',
      uuid: '4d4a1c86-2f09-11eb-ad99-1106efae56cb',
    },
  },
  {
    end_time: 1609756403,
    rated: true,
    accuracies: {
      white: 16.265795666965833,
      black: 51.77301788929801,
    },
    time_control: 600,
    time_class: ETimeClass.RAPID,
    rules: 'chess',
    white: {
      rating: 1037,
      result: 'stalemate',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1125,
      result: 'stalemate',
      id: 'https://api.chess.com/pub/player/fr30',
      username: 'fr30',
      uuid: '53f06080-1244-11e7-805a-000000000000',
    },
  },
  {
    end_time: 1609834434,
    rated: true,
    time_control: 600,
    time_class: ETimeClass.RAPID,
    rules: 'chess',
    white: {
      rating: 1008,
      result: 'insufficient',
      id: 'https://api.chess.com/pub/player/badger96',
      username: 'Badger96',
      uuid: '8cd8a92e-588d-11ea-82c9-01d55d7e8de7',
    },
    black: {
      rating: 1044,
      result: 'insufficient',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
  },
  {
    end_time: 1609836301,
    rated: true,
    accuracies: {
      white: 95.93060711484121,
      black: 36.31097297050747,
    },
    time_control: 600,
    time_class: ETimeClass.RAPID,
    rules: 'chess',
    white: {
      rating: 1053,
      result: 'win',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
    black: {
      rating: 1071,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/kurikame',
      username: 'KuriKame',
      uuid: '66ac7ccc-34dc-11eb-ae28-ab825a1d085e',
    },
  },
  {
    end_time: 1609838361,
    rated: true,
    time_control: 600,
    time_class: ETimeClass.BLITZ,
    rules: 'chess',
    white: {
      rating: 1047,
      result: 'resigned',
      id: 'https://api.chess.com/pub/player/vardanpopli',
      username: 'vardanpopli',
      uuid: 'f8436c5c-0260-11e7-8057-000000000000',
    },
    black: {
      rating: 1061,
      result: 'win',
      id: 'https://api.chess.com/pub/player/clochi',
      username: 'clochi',
      uuid: 'b4fb243e-13ce-11eb-8f67-c7a4b238cc13',
    },
  },
];

export default mockGameDTOs;
