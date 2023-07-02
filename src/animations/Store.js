import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { pathVariants, animatePath } from "./variants";

const Store = () => {
    const controls = useAnimation();
    const initialDelay = 6000;


  useEffect(() => {
    animatePath(initialDelay, controls)
    }, [controls]);

  return (
    <svg width="70" height="127" viewBox="0 0 147 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 72V124C16 126.761 18.2386 129 21 129H100C102.761 129 105 126.761 105 124V72" stroke="black" stroke-width="5"/>
        <path d="M29.5 69.5C29.5 77.3051 23.3839 83.5 16 83.5C8.61611 83.5 2.5 77.3051 2.5 69.5C2.5 61.6949 8.61611 55.5 16 55.5C23.3839 55.5 29.5 61.6949 29.5 69.5Z" fill="#89BEEF" stroke="black" stroke-width="5"/>
        <path d="M58.5 69.5C58.5 77.3051 52.3839 83.5 45 83.5C37.6161 83.5 31.5 77.3051 31.5 69.5C31.5 61.6949 37.6161 55.5 45 55.5C52.3839 55.5 58.5 61.6949 58.5 69.5Z" fill="#89BEEF" stroke="black" stroke-width="5"/>
        <path d="M86.5 69.5C86.5 77.3051 80.3839 83.5 73 83.5C65.6161 83.5 59.5 77.3051 59.5 69.5C59.5 61.6949 65.6161 55.5 73 55.5C80.3839 55.5 86.5 61.6949 86.5 69.5Z" fill="#89BEEF" stroke="black" stroke-width="5"/>
        <path d="M115.5 69.5C115.5 77.3051 109.384 83.5 102 83.5C94.6161 83.5 88.5 77.3051 88.5 69.5C88.5 61.6949 94.6161 55.5 102 55.5C109.384 55.5 115.5 61.6949 115.5 69.5Z" fill="#89BEEF" stroke="black" stroke-width="5"/>
        <path d="M52 129V103C52 102.448 52.4477 102 53 102H70C70.5523 102 71 102.448 71 103V129" stroke="black" stroke-width="5" stroke-linecap="round"/>
        <path d="M5.10367 60.5L18.523 34.5H104.234L113.46 60.5H5.10367Z" fill="#89BEEF" stroke="black" stroke-width="5"/>
        <motion.path d="M114.859 98H131.444C131.996 98 132.444 97.5523 132.444 97V42.216C132.444 41.9514 132.549 41.6976 132.736 41.5101L143.473 30.7349C143.786 30.4215 143.855 29.94 143.644 29.5513L130.211 4.85072C130.038 4.53393 129.709 4.33443 129.348 4.32861L47.7531 3.01168C47.3212 3.00471 46.9336 3.27589 46.7922 3.68405L41 20.3944" stroke="black" stroke-width="5" stroke-linecap="round"
        variants={pathVariants}
        initial="initial"
        animate={controls}/>
    </svg>
  )
}

export default Store