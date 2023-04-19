export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 30,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.7,
    },
  },
};

export const slideVariants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const typingVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 1,
    },
  },
};

export const bleedingTypingVariants = {
  hidden: {
    opacity: 0,
    width: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  show: {
    opacity: 1,
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 1,
    },
  },
};

export const rotatingTypingVariants = {
  hidden: {
    opacity: 0,
    width: 0,
    rotate: -180,
  },
  show: {
    opacity: 1,
    width: '100%',
    rotate: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 1,
    },
  },
};

export const retroTypingVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 1,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const writingVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 1,
      ease: 'linear',
      staggerChildren: 0.1,
      delay: 1.5,
    },
  },
};

export const writingLetterVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};



export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: i * 0.2 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 40,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay: 0.9,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 1,
    y: 40,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 150,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 0.5,
    },
  },
};
