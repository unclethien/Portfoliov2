import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);

  return (
    <motion.div
      className="relative h-[250px] min-w-[250px] bg-slate-400 flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
          >
            {/* <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore Now</span>
            </motion.h1> */}
            <Image
              src={image}
              alt={image}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        )}
        <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
