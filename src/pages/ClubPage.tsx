import {PlayersList} from "../components/Club/PlayersList.tsx";
import {Sponsors} from "../components/Shared/Sponsors.tsx";
import { useClub } from "../components/Club/api/hooks/useClub";

export function ClubPage() {
    const { data: clubData } = useClub();
    
    return (
        <>
            <PlayersList players={clubData?.players} staff={clubData?.staff}/>
            <Sponsors/>
        </>
    );
}