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
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-2">STAFF & JUCATORI</h2>
                <h2 className="text-3xl lg:text-5xl text-green-700 mb-8 lg:mb-12">2025-2026</h2>
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
                        viewport={{ once: false, amount: 0 }} // Trigger animation as soon as visible
                        transition={{ duration: 0.2, delay: index * 0.05 }} // Faster animation
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