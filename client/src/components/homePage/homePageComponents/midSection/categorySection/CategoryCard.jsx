import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, TrendingUp } from "lucide-react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import './CategoryCard.css'

export default function CategoryCard({ category, books = [], count = 0, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const preview = books.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative bg-white/80 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6
          border border-white/20 dark:border-white/10 shadow-lg
          transition-all duration-500 cursor-pointer overflow-hidden
          h-[500px] w-[300px] flex flex-col
          ${isHovered ? "scale-105 shadow-2xl" : "hover:shadow-xl"}
        `}
        onClick={onClick}
      >
        {/* Gradient Overlay (card color change on hover) */}
        <div
          className={`
            absolute inset-0 rounded-2xl transition-opacity duration-500
            bg-gradient-to-br ${category.color}
            ${isHovered ? "opacity-40" : "opacity-10"}
          `}
        />

        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div
              className={`
                w-12 h-12 rounded-xl bg-gradient-to-br ${category.color}
                flex items-center justify-center text-xl shadow-lg
                transition-transform duration-300
                ${isHovered ? "scale-110 rotate-3" : ""}
              `}
            >
              {category.icon}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>{count}</span>
              </div>
              <ChevronRight
                className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                  isHovered ? "translate-x-1 text-current" : ""
                }`}
              />
            </div>
          </div>

          <h3 className="text-lg mb-1">{category.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">
            {category.description}
          </p>
        </div>

        {/* Books Preview with Shine Effect */}
        <div className="relative z-10 grid grid-cols-2 xl:gap-4 md:gap-3 gap-2 mx-auto">
          {preview.length > 0 ? (
            preview.map((book, idx) => (
              <motion.div
                key={book.id ?? idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
                transition={{ delay: idx * 0.05, duration: 0.25 }}
                className="relative rounded-lg overflow-hidden transition-all duration-300"
              >
                <div className="w-[100px] h-[130px] flex justify-center items-center relative overflow-hidden rounded-lg">
                  <ImageSection bookCoverPage={book.image} />

                  {/* Shine sweep animation */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                      -skew-x-12 translate-x-[-150%]
                      ${isHovered ? "animate-shine" : ""}
                    `}
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((p) => (
                <div
                  key={p}
                  className="w-[70px] h-[100px] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Action */}
        <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-white/10 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Explore {count} books</span>
            <div
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isHovered ? "text-current" : "text-foreground"
              }`}
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <div
          className={`
            absolute inset-0 rounded-2xl transition-opacity duration-500
            bg-gradient-to-br ${category.color} opacity-0 blur-2xl -z-10
            ${isHovered ? "opacity-50" : ""}
          `}
        />
      </div>
    </motion.div>
  );
}
