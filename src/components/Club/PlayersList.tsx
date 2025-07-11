import { PlayerCard } from "./PlayerCard.tsx";
import players from "../../../data/players.json";
import staff from "../../../data/staff.json";
import { motion } from "framer-motion";

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export function PlayersList() {
    return (
        <div className="w-full mt-45">
            {/* Staff Header */}
            <div className="w-full h-20 flex flex-col justify-center items-center mb-16">
                <h1 className="text-5xl lg:text-6xl text-green-700 font-bold mb-10 uppercase text-center tracking-wider">
                    ANTRENORI SI STAFF
                </h1>
                <h1 className="text-5xl lg:text-6xl text-green-700 font-bold mb-10 italic uppercase text-center tracking-wider">
                    2025-2026
                </h1>
            </div>

            {/* Staff Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {staff.map((member, index) => (
                    <motion.div
                        key={member.name}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <PlayerCard
                            player={{
                                ...member,
                                description: capitalizeFirstLetter(member.description),
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Players Header */}
            <div className="w-full h-20 flex justify-center items-center mb-20">
                <h1 className="text-5xl text-green-700 font-bold mb-10 italic uppercase text-center tracking-wider">
                    JUCATORI
                </h1>
            </div>

            {/* Players Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {players.map((player, index) => (
                    <motion.div
                        key={player.number}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{ duration: 0.25, delay: index * 0.1 }}
                    >
                        <PlayerCard
                            player={{
                                ...player,
                                description: capitalizeFirstLetter(player.description),
                            }}
                            hideDetails={false}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}