"use client";

// Libraries
import { motion } from "framer-motion";

// Utils
import { useEffect, useState } from "react";

interface BarProcessingProps {
  limit?: number; // Number of blocks that will be animated
}

const totalBlocks = 35; // Total blocks in the bar
const totalDuration = 1.5; // Total duration in seconds

const easeFunction = (t: number) => t * t;

const BarProcessing: React.FC<BarProcessingProps> = ({ limit = 12 }) => {
  const [loadedBlocks, setLoadedBlocks] = useState<number[]>([]);
  const [progress, setProgress] = useState(0); // % of progress
  const [isCompleted, setIsCompleted] = useState(false); // Indicate if the loading is finished

  useEffect(() => {
    const animateBlocks = async () => {
      for (let i = 0; i < limit; i++) {
        const normalizedIndex = i / (limit - 1);
        const easedDelay = easeFunction(normalizedIndex) * totalDuration;

        setTimeout(() => {
          setLoadedBlocks((prev) => [...prev, i]);
          setProgress(Math.round(((i + 1) / totalBlocks) * 100)); // Calculate the actual progress

          if (i === limit - 1) {
            setTimeout(() => setIsCompleted(true), 400); // Activate the glow effect when the bar process is completed
          }
        }, easedDelay * 1000);
      }
    };

    animateBlocks();
  }, [limit]);

  return (
    <div className="w-full source-top-progress-wrpper is-processing">
      <div className="source-processing-title !capitalize !text-[14px]">[Progress] :</div>
      <div className="flex flex-row w-full items-center gap-x-[10px]">
        <div className="progress-bar items-center justify-center relative">
          <div className="flex space-x-[1px] p-0 relative z-10 w-full">
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-[15px] w-[11px] bg-empty inner-block-bar ${
                  loadedBlocks.includes(i) ? "is-loaded" : ""
                }`}
                animate={
                  isCompleted && loadedBlocks.includes(i)
                    ? {
                        opacity: [0.7, 1, 0.7],
                        boxShadow: ["0 0 5px #FFFFFF00", "0 0 15px #FFFFFF", "0 0 5px #FFFFFF00"],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </div>
        <div className="inner-status-bar">
          <div className="source-top-progress-text is-number-load">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default BarProcessing;
