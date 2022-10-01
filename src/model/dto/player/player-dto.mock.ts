import type { IPlayerDTO } from './player-dto.types';

export const mockPlayerDTO = (): IPlayerDTO => ({
  avatar: 'https://images.chesscomfiles.com/uploads/v1/user/93607520.82df64db.200x200o.e36c47cb01a7.jpeg',
  url: 'https://www.chess.com/member/clochi',
  username: 'clochi',
  joined: 1603306408,
});
