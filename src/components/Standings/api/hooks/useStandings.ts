import { useQuery } from '@tanstack/react-query';
import { fetchSeriesRankings } from '../endpoint/endpoint';
import standingsData from '../../../../../data/standings.json';
import transformToTeamFormat from '../../utils/utils';

export function useStandings() {
  return useQuery({
    queryKey: ['standings'],
    queryFn: async () => {
      try {
        const apiData = await fetchSeriesRankings();
        return transformToTeamFormat(apiData);
      } catch (error) {
        console.warn(
          'Failed to fetch from API, falling back to cached standings.json:',
          error
        );
        return standingsData.standingsVoetbalVlaanderen4P;
      }
    },
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
