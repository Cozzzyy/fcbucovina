import type { News } from '../../../../types/News';

export function sortNewsByDate(news: News[]): News[] {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function filterNewsById(news: News[], id: number): News[] {
  return news.filter(item => item.id === id);
}