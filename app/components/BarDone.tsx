"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BarDoneProps {
  limit?: number;
}

const totalBlocks = 35;
const totalDuration = 1;

const BarDone: React.FC<BarDoneProps> = ({ limit = 12 }) => {
  const [loadedBlocks, setLoadedBlocks] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("PROCESSING");
  const [displayText, setDisplayText] = useState(""); // Texto con efecto de tipeo
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const animateBlocks = async () => {
      for (let i = 0; i < limit; i++) {
        const normalizedIndex = i / limit;
        const easedDelay = normalizedIndex * totalDuration;

        setTimeout(() => {
          setLoadedBlocks((prev) => [...prev, i]);
        }, easedDelay * 1000);
      }

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, (totalDuration * 1000) / 100);

      setTimeout(() => {
        setStatusText(""); // Oculta "PROCESSING"

        // Simula tipeo de "ALL DONE"
        const finalText = "ALL DONE";
        let index = 0;
        const typingInterval = setInterval(() => {
          setDisplayText(finalText.slice(0, index + 1));
          index++;
          if (index === finalText.length) clearInterval(typingInterval);
        }, 50); // Velocidad del tipeo

        setIsReady(true);
      }, totalDuration * 1000);
    };

    animateBlocks();
  }, [limit]);

  return (
    <div className={`w-full source-top-progress-wrpper ${isReady ? "is-ready" : ""}`}>
      <div className="flex flex-row w-full items-center gap-x-[10px]">
        <div className="progress-bar items-center justify-center relative">
          <div className="flex space-x-[1px] p-0 relative z-10 w-full">
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-[15px] w-[11px] bg-empty inner-block-bar ${
                  loadedBlocks.includes(i) ? "is-loaded" : ""
                }`}
                animate={{ backgroundColor: isReady ? "#02ff56" : undefined }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>
        <div className="inner-status-bar">
          <motion.div
            className="source-top-progress-text is-processing is-number-load"
            animate={{ opacity: 1, color: isReady ? "#02ff56" : "#006be2" }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            {progress}%
          </motion.div>
          <motion.div
            className="source-top-progress-text is-detail-load"
            initial={{ opacity: 1, color: "#006be2" }}
            animate={{ opacity: statusText ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {statusText}
          </motion.div>
          <motion.div
            className="source-top-progress-text is-detail-load"
            initial={{ opacity: 0, color: "#006be2" }}
            animate={{ opacity: displayText ? 1 : 0, color: "#02ff56" }}
            transition={{ duration: 0.2 }}
          >
            {displayText}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BarDone;
