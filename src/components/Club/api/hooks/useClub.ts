import { useQuery } from '@tanstack/react-query';
import { fetchClubData } from '../endpoint/endpoint';
import playersData from '../../../../../data/players.json';
import staffData from '../../../../../data/staff.json';

export const useClub = () => {
  return useQuery({
    queryKey: ['club'],
    queryFn: async () => {
      try {
        return await fetchClubData();
      } catch (error) {
        console.warn('Failed to fetch club data from API, falling back to cached JSON:', error);
        return {
          players: playersData,
          staff: staffData,
        };
      }
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};