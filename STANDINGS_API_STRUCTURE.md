## Standings API Structure with React Query

### Project Structure

```
src/
├── components/
│   └── Standings/
│       ├── api/
│       │   ├── endpoint/
│       │   │   └── standingsEndpoint.ts    # GraphQL API calls
│       │   ├── hooks/
│       │   └── model/
│       │       └── standingsModel.ts       # API response types
│       ├── StandingsTable.tsx              # Component using hook
│       └── ...
├── hooks/
│   └── useStandings.ts                     # React Query hook
├── types/
│   └── Team.ts                             # Team data type
└── data/
    └── standings.json                      # Fallback cached data
```

### Files Overview

#### 1. **Model** (`src/components/Standings/api/model/standingsModel.ts`)
- Defines TypeScript types for API responses
- Types: `RankingTeam`, `Ranking`, `SeriesRankingsData`, `GraphQLResponse<T>`

#### 2. **Endpoint** (`src/components/Standings/api/endpoint/standingsEndpoint.ts`)
- Raw API fetching logic
- Function: `fetchSeriesRankings()` — calls RBFA GraphQL endpoint
- Returns unmodified API response data

#### 3. **Hook** (`src/hooks/useStandings.ts`)
- React Query hook with caching & retry logic
- Function: `useStandings()` — returns React Query result object
- Features:
  - 5-minute stale time
  - Automatic retries with exponential backoff
  - Falls back to `standings.json` on error
  - Transforms API data to `Team[]` format

#### 4. **Component** (`src/components/Standings/StandingsTable.tsx`)
- Uses `useStandings()` hook
- Accesses: `data`, `isPending`, `error` from React Query
- Shows loading state while fetching
- Shows error state on failure
- Displays standings table

### Usage

```tsx
import { useStandings } from '../../hooks/useStandings';

export function MyComponent() {
  const { data: standings, isPending, error } = useStandings();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {standings?.map(team => (
        <div key={team.pos}>{team.team}: {team.pts} pts</div>
      ))}
    </div>
  );
}
```

### React Query Benefits

✅ **Automatic Caching** — Prevents redundant API calls  
✅ **Background Refetching** — Keeps data fresh  
✅ **Smart Retry Logic** — Handles network failures gracefully  
✅ **Stale Time Management** — Configurable data freshness  
✅ **Memory Management** — Automatic cleanup  
✅ **Dev Tools** — React Query DevTools for debugging  

### API Response Flow

```
GraphQL Endpoint
    ↓
fetchSeriesRankings() — raw API response
    ↓
useStandings() hook — transforms & caches
    ↓
Component — displays standings
    ↓
(on error) → fallback to standings.json
```
