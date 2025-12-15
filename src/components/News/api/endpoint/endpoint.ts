import type { NewsResponse } from '../model/model';

export async function fetchNews(): Promise<NewsResponse> {
  // Replace with actual API endpoint when available
  const response = await fetch('/api/news');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}