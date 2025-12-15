import type { ClubDataResponse } from '../model/model';

export async function fetchClubData(): Promise<ClubDataResponse> {
  const response = await fetch('/api/club');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}