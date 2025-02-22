"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterNumberProps {
  value: number;
  duration?: number;
  delay?: number;
}

const CounterNumber: React.FC<CounterNumberProps> = ({ value, duration, delay = 0 }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const startValue = Math.floor(value * (0.3 + Math.random() * 0.2));
  const count = useMotionValue(startValue);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isClient) {
      const computedDuration = duration ?? (value > 100 ? 1 : Math.max(1, value / 100));

      const controls = animate(count, value, {
        duration: computedDuration,
        delay,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [value, count, duration, delay, isClient]);

  // Evitar renderizado en el servidor (SSR)
  if (!isClient) return <span>{value}</span>;

  return <motion.span className="data-value">{rounded}</motion.span>;
};

export default CounterNumber;
