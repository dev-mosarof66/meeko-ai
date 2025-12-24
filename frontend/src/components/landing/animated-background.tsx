/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";
import { useMemo } from "react";
import { generatePositions } from "@/lib/generate-position";
import { GiSpotedFlower } from "react-icons/gi";

export const AnimatedBackground = () => {

  const stars = useMemo(() => {
    const count = Math.floor(Math.random() * 6) + 10; 
    return generatePositions(count);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute top-0 text-sky-400 opacity-80"
          style={{ left: `${star.left}%` }}
          initial={{ y: -50 }}
          animate={{ y: "110vh" }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <GiSpotedFlower size={star.size} />
        </motion.div>
      ))}
    </div>
  );
};
