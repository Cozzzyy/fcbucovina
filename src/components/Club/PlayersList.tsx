import { PlayerCard } from "./PlayerCard.tsx";
import players from "../../../data/players.json";
import staff from "../../../data/staff.json";

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function PlayersList() {
    return (
        <div className="w-full mt-40">
            <div className="w-full h-20 flex justify-center items-center mb-16">
                <h1 className="text-5xl lg:text-6xl text-green-700 font-bold mb-10 italic uppercase text-center tracking-wider">
                    ANTRENORI SI STAFF
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {staff.map((member) => (
                    <PlayerCard
                        player={{
                            ...member,
                            description: capitalizeFirstLetter(member.description),
                        }}
                    />
                ))}
            </div>
            <div className="w-full h-20 flex justify-center items-center mb-20">
                <h1 className="text-6xl text-green-700 font-bold mb-10 italic uppercase text-center tracking-wider">
                    JUCATORI
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {players.map((player) => (
                    <PlayerCard
                        key={player.number}
                        player={{
                            ...player,
                            description: capitalizeFirstLetter(player.description),
                        }}
                        hideDetails={false} // Hide details for the players list
                    />
                ))}
            </div>
        </div>
    );
}