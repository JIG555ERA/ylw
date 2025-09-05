import React, { useState } from "react";
import { LuBookmark } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const LikeMark = () => {
  const [like, setLike] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleLike = () => {
    if (!like) {
      setBurst(true);
      setTimeout(() => setBurst(false), 700); // reset after animation
    }
    setLike((prev) => !prev);
  };

  const particles = Array.from({ length: 8 }); // 8 droplets

  return (
    <div
      onClick={handleLike}
      className="cursor-pointer relative flex items-center justify-center"
    >
      {/* Burst Droplets with Tail */}
      <AnimatePresence>
        {burst &&
          particles.map((_, i) => {
            const angle = (i * 360) / particles.length;
            const x = Math.cos((angle * Math.PI) / 180) * 28; // radius
            const y = Math.sin((angle * Math.PI) / 180) * 28;

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
                animate={{ x, y, opacity: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute"
                style={{ rotate: `${angle}deg` }} // orient to travel direction
              >
                {/* Tail + Head */}
                <div className="relative flex items-center">
                  {/* Tail */}
                  <div className="w-2 h-5 bg-red-500/60 rounded-full blur-[1px]" />
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>

      {/* Bookmark Icons */}
      {!like ? (
        <LuBookmark className="lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 text-gray-400 hover:scale-105 transition-transform" />
      ) : (
        <div className="relative inline-flex">
          <FaBookmark className="lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 text-blue-400 hover:scale-105 transition-transform" />
          <TiTick className="absolute inset-0 m-auto w-4 h-4 translate-y-[-2px] text-white" />
        </div>
      )}
    </div>
  );
};

export default LikeMark;
