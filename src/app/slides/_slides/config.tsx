import Slide01 from "./slide01.mdx";
import Slide02 from "./slide02.mdx";

export const slideMap: Record<number, React.ReactNode> = {
  1: <Slide01 />,
  2: <Slide02 />,
};

export const getNumberOfSlides = () => Object.keys(slideMap).length;
export const hasMoreSlides = (slideId: number) => slideId < getNumberOfSlides();

export const Slide = ({ slideId }: { slideId: number }) => {
  return slideMap[slideId];
};
