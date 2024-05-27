import { Background } from "../_slides/background";
import DoTheMath from "./do-the-math.mdx";
import DontSellTech from "./dont-sell-tech.mdx";
import EdgeAndBack from "./edge-and-back.mdx";
import ErrorHandling from "./error-handling.mdx";
import FeatureToggling from "./feature-toggling.mdx";
import HighLevel from "./high-level.mdx";
import HowDoYouStart from "./how-do-you-start.mdx";
import Internationalization from "./internationalization.mdx";
import Intro from "./intro.mdx";
import Me from "./me.mdx";
import PairUp from "./pair-up.mdx";
import RSC from "./rsc.mdx";
import SpectrumOfApplications from "./spectrum-of-applications.mdx";
import TellAndShow from "./tell-and-show.mdx";
import TimingIsBad from "./timing-is-bad.mdx";
import WhatDidWeLearn from "./what-did-we-learn.mdx";

export const slideMap: Record<number, React.ReactNode> = {
  1: <Intro />,
  2: <Background />,
  3: <Me />,
  4: <HowDoYouStart />,
  5: <DontSellTech />,
  6: <DoTheMath />,
  7: <PairUp />,
  8: <TellAndShow />,
  9: <TimingIsBad />,
  10: <SpectrumOfApplications />,
  11: <HighLevel />,
  12: <WhatDidWeLearn />,
  13: <RSC />,
  14: <Internationalization />,
  15: <FeatureToggling />,
  16: <ErrorHandling />,
  17: <EdgeAndBack />,
};

export const getNumberOfSlides = () => Object.keys(slideMap).length;
export const hasMoreSlides = (slideId: number) => slideId < getNumberOfSlides();

export const Slide = ({ slideId }: { slideId: number }) => {
  return slideMap[slideId];
};
