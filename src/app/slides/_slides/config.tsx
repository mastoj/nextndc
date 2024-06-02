import { Background } from "../_slides/background";
import Caching from "./caching.mdx";
import Closing from "./closing.mdx";
import DoTheMath from "./do-the-math.mdx";
import DontSellTech from "./dont-sell-tech.mdx";
import EdgeAndBack from "./edge-and-back.mdx";
import ErrorHandling from "./error-handling.mdx";
import FeatureToggling from "./feature-toggling.mdx";
import HowDoYouStart from "./how-do-you-start.mdx";
import Internationalization from "./internationalization.mdx";
import Intro from "./intro.mdx";
import Me from "./me.mdx";
import PairUp from "./pair-up.mdx";
import PPRAndStreaming from "./ppr-and-streaming.mdx";
import RSC from "./rsc.mdx";
import ServerActions from "./server-actions.mdx";
import SpectrumOfApplications from "./spectrum-of-applications.mdx";
import TellAndShow from "./tell-and-show.mdx";
import TimingIsBad from "./timing-is-bad.mdx";
import WhatDidWeLearn from "./what-did-we-learn.mdx";
import WhyNext from "./why-next.mdx";

export const slideMap: Record<number, React.ReactNode> = [
  Intro,
  Background,
  Me,
  HowDoYouStart,
  DontSellTech,
  DoTheMath,
  PairUp,
  TellAndShow,
  TimingIsBad,
  WhyNext,
  SpectrumOfApplications,
  WhatDidWeLearn,
  EdgeAndBack,
  RSC,
  Internationalization,
  FeatureToggling,
  ServerActions,
  Caching,
  ErrorHandling,
  PPRAndStreaming,
  Closing,
]
  .map((Slide, index) => ({ [index + 1]: <Slide key={index} /> }))
  .reduce((acc, slide) => ({ ...acc, ...slide }), {});

export const getNumberOfSlides = () => Object.keys(slideMap).length;
export const hasMoreSlides = (slideId: number) => slideId < getNumberOfSlides();

export const Slide = ({ slideId }: { slideId: number }) => {
  return slideMap[slideId];
};
