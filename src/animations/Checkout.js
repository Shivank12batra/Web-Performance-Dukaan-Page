import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Checkout = () => {
  const circleControls = useAnimation();
  const pathControls = useAnimation();

  useEffect(() => {
    const animateIcon = async () => {
      await circleControls.start({ scale: 0.5 });
      await pathControls.start({ scale: 0.5 });
      await circleControls.start({ scale: 1 });
      await pathControls.start({ scale: 1 });
    };

    const interval = setInterval(animateIcon, 5000);

    return () => clearInterval(interval); 
  }, [circleControls, pathControls]);

  return (
    <svg width="70" height="127" viewBox="0 0 177 127" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L44.2357 12.8404L81 114" stroke="black" strokeWidth="5" strokeLinecap="round" />
      <path d="M58.5 45H90" stroke="black" strokeWidth="5" strokeLinecap="round" />
      <path d="M145.524 44H175L145.025 114H81" stroke="black" strokeWidth="5" strokeLinecap="round" />
      <motion.circle
        cx="119"
        cy="45"
        r="20"
        fill="#8DE78C"
        initial={{ scale: 1 }}
        animate={circleControls}
      />
      <motion.path
        d="M109 45.375L116.6 51L128 39"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ scale: 1 }}
        animate={pathControls}
      />
      <path
        d="M83.0001 114C69 114 71 132.5 83.0001 132.5C95.0002 132.5 150.5 132.5 150.5 132.5"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="151" cy="137" r="4.5" stroke="black" strokeWidth="5" />
      <circle cx="92" cy="137" r="4.5" stroke="black" strokeWidth="5" />
    </svg>
  );
};

export default Checkout;

