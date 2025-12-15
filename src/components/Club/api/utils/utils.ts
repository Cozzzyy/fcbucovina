import type { Player } from '../../../../types/Player';

export function sortPlayersByNumber(players: Player[]): Player[] {
  return [...players].sort((a, b) => (a.number || 0) - (b.number || 0));
}

export function filterPlayersByPosition(players: Player[], position: string): Player[] {
  return players.filter(player => player.position.toLowerCase() === position.toLowerCase());
}