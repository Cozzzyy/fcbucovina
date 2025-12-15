import { useQuery } from '@tanstack/react-query';
import { fetchSeriesRankings } from '../endpoint/endpoint';
import transformToTeamFormat from '../../utils/utils';

export function useStandings() {
  return useQuery({
    queryKey: ['standings'],
    queryFn: async () => {
      const apiData = await fetchSeriesRankings();
      return transformToTeamFormat(apiData);
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
