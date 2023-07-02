import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { clockVariants, pathVariants, animatePath } from "./variants";

const Speed = () => {
   const pathControls = useAnimation();
   const initialDelay = 2000; // Initial delay of 2 seconds


  useEffect(() => {
    animatePath(initialDelay, pathControls)
    }, [pathControls]);

  return (
    <motion.svg width="70" height="127" viewBox="0 0 142 127" fill="none" xmlns="http://www.w3.org/2000/svg"
    variants={clockVariants} initial="initial" animate={pathControls}>
        <path d="M70.6528 22.5V4.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
        <path d="M96.3472 22.5V4.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
        <path d="M102 3L62.9445 3" stroke="black" stroke-width="5" stroke-linecap="round"/>
        <motion.ellipse cx="83.5" cy="70.5" rx="55.5" ry="54" fill="#DD9200" variants={clockVariants} initial="initial" animate={pathControls}/>
        <path d="M42.5978 34C52.7431 23.2431 67.3122 16.5 83.5001 16.5C114.152 16.5 139 40.6766 139 70.5C139 100.323 114.152 124.5 83.5001 124.5C67.3122 124.5 52.7431 117.757 42.5978 107" stroke="black" stroke-width="5" stroke-linecap="round"/>
        <motion.path d="M7 55.5H38" stroke="black" stroke-width="5" stroke-linecap="round"
        variants={pathVariants} initial="initial" animate={pathControls}/>
        <motion.path d="M3 68.5H34" stroke="black" stroke-width="5" stroke-linecap="round"
        variants={pathVariants} initial="initial" animate={pathControls}/>
        <motion.path d="M11 80.5H42" stroke="black" stroke-width="5" stroke-linecap="round"
        variants={pathVariants} initial="initial" animate={pathControls}/>
        <circle cx="82" cy="70.5" r="7.5" fill="white" stroke="black" stroke-width="5"/>
        <path
        d="M88.6943 64.1687L108.152 46.8313"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"/>
    </motion.svg>
  )
}

export default Speed