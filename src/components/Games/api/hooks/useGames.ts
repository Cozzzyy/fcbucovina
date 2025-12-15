import { useQuery } from "@tanstack/react-query";
import { fetchClubMatches, transformToGameFormat } from "../endpoint/endpoint";

export const useGames = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      try {
        const data = await fetchClubMatches();
        return transformToGameFormat(data.clubMatchesAssignations);
      } catch (error) {
        console.warn("Failed to fetch games from API, falling back to cached JSON:", error);
      }
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
