"use client";

import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.04,
    } 
  }
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.05, 
      ease: "linear",
    } 
  }
};

interface TypingProps {
  text: string;
}

const Typing = ({ text, ...rest }: TypingProps) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span 
        key={`${char}-${i}`} 
        variants={letterVariants} 
        style={{ display: "inline-block" }}
      >
        {char}
      </motion.span>
    ))}
  </motion.p>
);

export default Typing;