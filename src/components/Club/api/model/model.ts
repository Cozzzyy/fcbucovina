import type { Player } from '../../../../types/Player';

export type Staff = Player

export interface ClubDataResponse {
  players: Player[];
  staff: Staff[];
}