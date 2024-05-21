"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { useSlide } from "../_components/slider-provider";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

type Props = {};

const SlidesTemplate = ({ children }: PropsWithChildren<Props>) => {
  const pathname = usePathname();
  const { direction } = useSlide();
  const [_, slideIdStr] = pathname.split("/slides/");
  const slideId = parseInt(slideIdStr, 10);
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full p-4"
        key={slideId}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlidesTemplate;
