import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { pathVariants, animatePath } from "./variants";

const Accounts = () => {
  const controls = useAnimation();
  const initialDelay = 14000;


  useEffect(() => {
    animatePath(initialDelay, controls)
    }, [controls]);

  return (
    <svg width="70" height="127" viewBox="0 0 240 127" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="2.5"
        y="17.5"
        width="234"
        height="143"
        rx="21.5"
        fill="#8DE78C"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M59 96.5H91C102.874 96.5 112.5 106.126 112.5 118V122.5H37.5V118C37.5 106.126 47.1259 96.5 59 96.5Z"
        fill="white"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M89 2.5H149C153.142 2.5 156.5 5.85786 156.5 10V21C156.5 25.1421 153.142 28.5 149 28.5H89C84.8579 28.5 81.5 25.1421 81.5 21V10C81.5 5.85786 84.8579 2.5 89 2.5Z"
        fill="white"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.circle
        cx="75"
        cy="64"
        r="15.5"
        fill="white"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M126 57.5H203"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M126 86.5H203"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M126 115.5H203"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="initial"
        animate={controls}
      />
    </svg>
  );
};

export default Accounts;
