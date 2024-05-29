"use client";
import React, { PropsWithChildren } from "react";

type SlideContext = {
  direction: number;
  forward: () => boolean;
  back: () => boolean;
  pauseProgress: () => void;
  resumeProgress: () => void;
};

const SlideContext = React.createContext<SlideContext>({
  direction: 0,
  forward: () => false,
  back: () => false,
  pauseProgress: () => {},
  resumeProgress: () => {},
});

const SliderProvider = (props: PropsWithChildren) => {
  const [direction, setDirection] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const pauseProgress = () => setPaused(true);
  const resumeProgress = () => setPaused(false);
  const forward = () => {
    if (paused) {
      window.dispatchEvent(new Event("forward"));
      return false;
    }
    setDirection(1);
    return true;
  };
  const back = () => {
    if (paused) {
      window.dispatchEvent(new Event("back"));
      return false;
    }
    setDirection(-1);
    return true;
  };
  return (
    <SlideContext.Provider
      value={{ direction, forward, back, pauseProgress, resumeProgress }}
    >
      {props.children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => React.useContext(SlideContext);

export default SliderProvider;
