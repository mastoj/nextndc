import Slide01 from "./slide01.mdx";
import { Slide02 } from "./slide02";
import Slide03 from "./slide03.mdx";
import Slide04 from "./slide04.mdx";
import Slide05 from "./slide05.mdx";
import Slide06 from "./slide06.mdx";
import Slide07 from "./slide07.mdx";
import Slide08 from "./slide08.mdx";
import Slide09 from "./slide09.mdx";
import Slide10 from "./slide10.mdx";
import Slide11 from "./slide11.mdx";
import Slide12 from "./slide12.mdx";
import Slide13 from "./slide13.mdx";
import Slide14 from "./slide14.mdx";
import Slide15 from "./slide15.mdx";
import Slide16 from "./slide16.mdx";
import Slide17 from "./slide17.mdx";

export const slideMap: Record<number, React.ReactNode> = {
  1: <Slide01 />,
  2: <Slide02 />,
  3: <Slide03 />,
  4: <Slide04 />,
  5: <Slide05 />,
  6: <Slide06 />,
  7: <Slide07 />,
  8: <Slide08 />,
  9: <Slide09 />,
  10: <Slide10 />,
  11: <Slide11 />,
  12: <Slide12 />,
  13: <Slide13 />,
  14: <Slide14 />,
  15: <Slide15 />,
  16: <Slide16 />,
  17: <Slide17 />,
};

export const getNumberOfSlides = () => Object.keys(slideMap).length;
export const hasMoreSlides = (slideId: number) => slideId < getNumberOfSlides();

export const Slide = ({ slideId }: { slideId: number }) => {
  return slideMap[slideId];
};
