import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, CreditCard } from "lucide-react";

export function SwipeToPayButton({ total, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleDragEnd = (event, info) => {
    const threshold = 0.8; // 80% of the container width
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const dragDistance = info.offset.x;
    const progress = Math.max(0, Math.min(1, dragDistance / (containerWidth - 60))); // 60px is button width

    setIsDragging(false);

    if (progress >= threshold) {
      setIsCompleted(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    } else {
      setDragProgress(0);
    }
  };

  const handleDrag = (event, info) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const dragDistance = Math.max(0, info.offset.x);
    const progress = Math.max(0, Math.min(1, dragDistance / (containerWidth - 60)));
    setDragProgress(progress);
    setIsDragging(true);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <div className="space-y-4">
      {/* Swipe to Pay Container */}
      <div
        ref={containerRef}
        className="relative h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Progress Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isCompleted ? 1 : dragProgress }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: isCompleted ? 0.3 : 0 }}
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              opacity: isDragging ? 0.7 : 1,
              scale: isDragging ? 0.95 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            {isCompleted ? (
              <div className="flex items-center gap-2 text-white font-medium">
                <Check className="h-5 w-5" />
                Payment Processing...
              </div>
            ) : (
              <div className="text-white">
                <div className="font-medium">
                  {isDragging ? "Release to Pay" : "Swipe to Pay"}
                </div>
                <div className="text-sm opacity-90">${total.toFixed(2)}</div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Draggable Button */}
        {!isCompleted && (
          <motion.div
            className="absolute left-2 top-2 bottom-2 w-12 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
            drag="x"
            dragConstraints={{
              left: 0,
              right: containerRef.current
                ? containerRef.current.offsetWidth - 60
                : 0,
            }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={{
              x: isCompleted ? "100%" : 0,
              backgroundColor: isDragging ? "#f3f4f6" : "#ffffff",
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            whileDrag={{ scale: 1.05 }}
          >
            <ArrowRight
              className={`h-5 w-5 transition-colors duration-200 ${
                isDragging ? "text-blue-600" : "text-gray-600"
              }`}
            />
          </motion.div>
        )}

        {/* Completion Checkmark */}
        {isCompleted && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600" />
            </div>
          </motion.div>
        )}

        {/* Shimmer Effect */}
        {!isCompleted && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        )}
      </div>

      {/* Helper Text */}
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {isCompleted
            ? "Redirecting to payment confirmation..."
            : "Drag the button to complete your payment"}
        </p>
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400">
        <CreditCard className="h-4 w-4" />
        <span>Secured by 256-bit SSL encryption</span>
      </div>
    </div>
  );
}
