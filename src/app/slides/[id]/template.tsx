"use client";

import { useFlags } from "@/components/flag-provider";
import { JsonValue } from "@vercel/flags";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { useSlide } from "../_components/slider-provider";

const slideVariants = {
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

const fadeVariants = {
  enter: {
    opacity: 0,
    transition: {
      opacity: { duration: 1.6 },
    },
  },
  center: {
    zIndex: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 1.6 },
    },
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    transition: {
      opacity: { duration: 1.6 },
    },
  },
};

const getVariants = (useFadeVariants: JsonValue) => {
  return useFadeVariants ? fadeVariants : slideVariants;
};

type Props = {};

const SlidesTemplate = ({ children }: PropsWithChildren<Props>) => {
  const flags = useFlags();
  const useFadeVariants = flags.flags["fade-variants"];
  const variants = getVariants(useFadeVariants);
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
          opacity: { duration: 0.7 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlidesTemplate;
