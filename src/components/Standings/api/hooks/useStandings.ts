import { useQuery } from '@tanstack/react-query';
import { fetchSeriesRankings } from '../endpoint/endpoint';
import transformToTeamFormat from '../../utils/utils';
import standingsData from '../../../../../data/standings.json';
import type { Team } from '../../../../types/Team';

export function useStandings() {
  return useQuery({
    queryKey: ['standings'],
    queryFn: async () => {
      try {
        const apiData = await fetchSeriesRankings();
        return transformToTeamFormat(apiData);
      } catch (error) {
        console.warn('Failed to fetch standings from API, falling back to cached JSON:', error);
        return standingsData.standingsVoetbalVlaanderen4P as Team[];
      }
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
