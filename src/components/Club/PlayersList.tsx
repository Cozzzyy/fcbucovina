import { PlayerCard } from "./PlayerCard.tsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Player } from "../../types/Player";
import { useMemo } from "react";

interface PlayersListProps {
    players?: Player[];
    staff?: Player[];
}

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export function PlayersList({ players = [], staff = [] }: PlayersListProps) {
    const { t } = useTranslation();

    const capitalizedStaff = useMemo(() =>
        staff.map(member => ({
            ...member,
            description: capitalizeFirstLetter(member.description),
        })),
        [staff]);

    const capitalizedPlayers = useMemo(() =>
        players.map(player => ({
            ...player,
            description: capitalizeFirstLetter(player.description),
        })),
        [players]);

    return (
        <div className="w-full p-4 max-w-6xl mx-auto mt-6 lg:mt-10">
            {/* Staff Header */}
            <div className="mb-13">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('club.staffAndPlayers')}</h2>
                <h2 className="text-3xl lg:text-5xl text-green-700 mb-8 lg:mb-12">{t('club.season')}</h2>
            </div>

            {/* Staff Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {capitalizedStaff.map((member, index) => (
                    <motion.div
                        key={member.name}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <PlayerCard player={member} />
                    </motion.div>
                ))}
            </div>

            {/* Players Header */}
            <div className="mb-8 mt-12">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic uppercase">
                    {t('club.playersTitle')}
                </h2>
            </div>

            {/* Players Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 md:gap-20 lg:gap-28">
                {capitalizedPlayers.map((player, index) => (
                    <motion.div
                        key={player.number}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0 }} // Trigger animation as soon as visible
                        transition={{ duration: 0.2, delay: index * 0.05 }} // Faster animation
                    >
                        <PlayerCard
                            player={player}
                            hideDetails={false}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}