export const pathVariants = {
    initial: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

export const clockVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [0, 10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
};

export const shrinkVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 0.9, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  export const rotateVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [0, 360, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  export const checkoutVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 0.2, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  export const accountVariants = {
    initial : {
      opacity: 1
    },
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
      }
    }
  }
  

export const animatePath = async (initialDelay, controls) => {
    await new Promise((resolve) => setTimeout(resolve, initialDelay));
    controls.start("animate");

    const interval = setInterval(() => {
      controls.start("animate");
    }, 24000);

    return () => clearInterval(interval);
};