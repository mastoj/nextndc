import Image from "next/image";
import { Notes } from "../_components/notes";
import Comment1 from "./images/bad_comment1.png";
import Comment2 from "./images/bad_comment2.png";
import MissingPrices from "./images/missing_prices.png";
import SpeedInsights from "./images/speed_insights.png";
import { TwoColumns } from "./slide-layouts";

export const Slide02 = () => {
  return (
    <>
      <TwoColumns
        titleColumn1="From this"
        titleColumn2="To this"
        column1={
          <div className="relative grid grid-rows-[40%_1fr_1fr] h-3/4 min-h-0 overflow-hidden">
            <div className="mx-auto flex flex-row justify-center min-h-0">
              <Image
                src={MissingPrices}
                alt="Missing price sample"
                className="object-contain min-h-0"
              />
            </div>
            <div className="flex flex-row justify-center mx-auto">
              <Image
                src={Comment1}
                alt="Bad comment example 1"
                className="object-contain"
              />
            </div>
            <div className="flex flex-row justify-center mx-auto">
              <Image
                src={Comment2}
                alt="Bad comment example 2"
                className="object-contain"
              />
            </div>
          </div>
        }
        column2={
          <div className="mx-auto flex flex-row justify-center">
            <Image src={SpeedInsights} alt="Current speed insights" />
          </div>
        }
      />
      <Notes>
        <p>
          If you have used the site a lot you might have seen something like the
          image at the top. It is a screenshot from the old site where the
          prices are missing. This was a common issue that we had on the old
          site. In this specific scenario it was someone reporting that it took
          more than 30 seconds for the prices to load. That is far from ideal
          and not what the customer wants.
        </p>
        <p>
          To be fair, the old site had a lot of improvements the last year or
          so, but it was too much effort making it work in an effective way. We
          also had comments like below the image. Translated it says something
          like the site is horrible so they end up on another site, and, the
          bottom one is from a person working in store in elkjøp and they are
          also frustrated. These was just two out of many comments online the
          last couple of years. As a developer it sort of hurts seeing these
          kind of feedback, even though I was not part of the team delivering
          the previous version, so that is something I wanted to address. I even
          had a fellow speaker here at the conference asked me when I joined
          elkjøp when I will fix the site.
        </p>
        <p>
          So this is partly the story of how we made it from what you see on the
          left to what we have one the right hand side. I have two things that I
          want you to take with you from this talk, one is how do you get to
          make these kind of changes in a large enterprise in the first place
          and then also the learnings around nextjs and vercel of course. Focus
          will of course be on the latter, but I thought it might be of interest
          to hear how you can go about making these kind of changes in larger
          organizations, which is not always easy for a lot of different
          reasons.
        </p>
      </Notes>
    </>
  );
};
