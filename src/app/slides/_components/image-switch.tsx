"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSlide } from "./slider-provider";

type Props = {
  images: React.ReactNode[];
};

export const ImageSwitch = ({ images }: Props) => {
  const { pauseProgress, resumeProgress } = useSlide();
  const [currentImage, setCurrentImage] = React.useState(0);

  useEffect(() => {
    if (currentImage == 0 && images.length > 0) {
      pauseProgress();
    }

    const nextImage = () => {
      setCurrentImage(currentImage + 1);
    };
    const prevImage = () => {
      setCurrentImage(currentImage - 1 + images.length);
    };
    // Register a listener for the custom "forward" on the window object
    window.addEventListener("forward", nextImage);
    // Register a listener for the custom "back" on the window object
    window.addEventListener("back", prevImage);
    console.log("navigation-override-start", currentImage, images.length);
    if (currentImage >= images.length - 1) {
      resumeProgress();
      console.log("navigation-override-end");
      window.removeEventListener("forward", nextImage);
      window.removeEventListener("back", prevImage);
      window.dispatchEvent(new Event("navigation-override-end"));
    }
    return () => {
      window.removeEventListener("forward", nextImage);
      window.removeEventListener("back", prevImage);
    };
  }, [currentImage, images.length, pauseProgress, resumeProgress]);
  if (images.length === 0) {
    return null;
  }
  // Animate fade in and out of images
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.2 }}
        key={currentImage}
      >
        {images[currentImage]}
      </motion.div>
    </AnimatePresence>
  );
};
