import Background from "./background.mdx";
import Caching from "./caching.mdx";
import Closing from "./closing.mdx";
import DoTheMath from "./do-the-math.mdx";
import DontSellTech from "./dont-sell-tech.mdx";
import EdgeAndBack from "./edge-and-back.mdx";
import FeatureToggling from "./feature-toggling.mdx";
import HowDoYouStart from "./how-do-you-start.mdx";
import Internationalization from "./internationalization.mdx";
import Intro from "./intro.mdx";
import Layout from "./layout.mdx";
import Me from "./me.mdx";
import PairUp from "./pair-up.mdx";
import PPRAndStreaming from "./ppr-and-streaming.mdx";
import Routing from "./routing.mdx";
import RSC from "./rsc.mdx";
import ServerActions from "./server-actions.mdx";
import SpectrumOfApplications from "./spectrum-of-applications.mdx";
import Summary from "./summary.mdx";
import TellAndShow from "./tell-and-show.mdx";
import TimingIsBad from "./timing-is-bad.mdx";
import Vercel from "./vercel.mdx";
import WhatDidWeLearn from "./what-did-we-learn.mdx";
import WhyNext from "./why-next.mdx";

const components = [
  { name: "Intro", component: Intro },
  { name: "Background", component: Background },
  { name: "Me", component: Me },
  { name: "HowDoYouStart", component: HowDoYouStart },
  { name: "DontSellTech", component: DontSellTech },
  { name: "DoTheMath", component: DoTheMath },
  { name: "PairUp", component: PairUp },
  { name: "TellAndShow", component: TellAndShow },
  { name: "TimingIsBad", component: TimingIsBad },
  { name: "WhyNext", component: WhyNext },
  { name: "SpectrumOfApplications", component: SpectrumOfApplications },
  { name: "WhatDidWeLearn", component: WhatDidWeLearn },
  { name: "EdgeAndBack", component: EdgeAndBack },
  { name: "Routing", component: Routing },
  { name: "Layout", component: Layout },
  { name: "RSC", component: RSC },
  { name: "Internationalization", component: Internationalization },
  { name: "FeatureToggling", component: FeatureToggling },
  { name: "ServerActions", component: ServerActions },
  { name: "Caching", component: Caching },
  // { name: "ErrorHandling", component: ErrorHandling },
  { name: "PPRAndStreaming", component: PPRAndStreaming },
  { name: "Vercel", component: Vercel },
  { name: "Summary", component: Summary },
  { name: "Closing", component: Closing },
] as const;

export type SlideName = (typeof components)[number]["name"];

export const slideMap: Record<
  number,
  { name: SlideName; component: React.ReactNode }
> = components
  .map(({ name, component: Slide }, index) => ({
    [index + 1]: { name: name, component: <Slide key={index} /> },
  }))
  .reduce((acc, slide) => ({ ...acc, ...slide }), {});

export const getNumberOfSlides = () => Object.keys(slideMap).length;
export const hasMoreSlides = (slideId: number) => slideId < getNumberOfSlides();

export const Slide = ({ slideId }: { slideId: number }) => {
  return slideMap[slideId].component;
};

export const getSlidePathFromName = (slideName: SlideName) => {
  const entry = Object.entries(slideMap).find(
    ([, { name }]) => name === slideName
  );
  return `/slides/${entry?.[0]}`;
};
