import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Analytics = () => {
  const pathControls = useAnimation();

  useEffect(() => {
    const animatePaths = async () => {
        await pathControls.start({ opacity: 0, transition: { duration: 1 } });
        await pathControls.start({ opacity: 1, transition: { duration: 1 } });
    };

    const interval = setInterval(animatePaths,8000);

    return () => clearInterval(interval);    
  }, [pathControls]);  

  return (
    <svg width="60" height="96" viewBox="0 0 109 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="104" height="72" rx="7.5" fill="#89BEEF" stroke="black" strokeWidth="5" />
        <path d="M27.25 93.4999C49.1307 68.6034 63.0156 68.5 83.4531 93.5" stroke="black" strokeWidth="5" stroke-linecap="round" />
        <motion.path
            d="M15.7539 62L46.0464 36.6604C46.4787 36.2988 47.1243 36.3657 47.4733 36.8083L56.7957 48.6315C57.1622 49.0964 57.8501 49.1429 58.2758 48.7315L91.1172 17"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ opacity: 1 }}
            animate={pathControls}   
        />
        <motion.path
            d="M91.1172 43V18C91.1172 17.4477 90.6695 17 90.1172 17H66"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ opacity: 1 }}
            animate={pathControls}
        />
    </svg>
  )
}

export default Analytics