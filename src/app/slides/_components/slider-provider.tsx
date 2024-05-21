"use client";
import React, { PropsWithChildren } from "react";

type SlideContext = {
  direction: number;
  forward: () => void;
  back: () => void;
};

const SlideContext = React.createContext<SlideContext>({
  direction: 0,
  forward: () => {},
  back: () => {},
});

const SliderProvider = (props: PropsWithChildren) => {
  const [direction, setDirection] = React.useState(0);
  const forward = () => setDirection(1);
  const back = () => setDirection(-1);
  return (
    <SlideContext.Provider value={{ direction, forward, back }}>
      {props.children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => React.useContext(SlideContext);

export default SliderProvider;
