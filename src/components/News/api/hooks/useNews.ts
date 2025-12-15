import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../endpoint/endpoint';
import newsData from '../../../../../data/data.json';
import type { News } from '../../../../types/News';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      try {
        const data = await fetchNews();
        return data.news;
      } catch (error) {
        console.warn('Failed to fetch news from API, falling back to cached JSON:', error);
        return newsData as News[]; // Type as News[] when available
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes for news
    gcTime: 60 * 60 * 1000, // 1 hour
  });
};