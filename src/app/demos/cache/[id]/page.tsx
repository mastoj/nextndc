import { Column, TwoColumns } from "@/app/slides/_components/slide-layouts";
import { unstable_cache as cache, revalidateTag } from "next/cache";
import Image from "next/image";
import RevalidateButton from "./_components/revalidate-button";

type Props = {
  params: { id: string };
};

export const revalidate = 300;

// Get random cat image url
const getRandomCat = async (revalidationTime?: number) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?rnd=${revalidationTime}`,
    {
      next: {
        revalidate: revalidationTime,
        tags: ["cats"],
      },
    }
  );
  const data = await response.json();
  console.log(
    "==> Revalidation time: ",
    revalidationTime,
    data[0].url,
    new Date().toISOString()
  );
  return data[0] as { url: string; width: number; height: number };
};

const getTime = async ({ revalidationTime }: { revalidationTime: number }) => {
  return cache(
    async () => new Date().toLocaleTimeString(),
    [revalidationTime.toString(), "cat"],
    {
      revalidate: revalidationTime,
      tags: ["cats"],
    }
  )();
};

const CatImage = async ({ revalidationTime }: { revalidationTime: number }) => {
  const catData = await getRandomCat(revalidationTime);
  return (
    <div className="block gap-2 h-full w-full">
      <div className="h-[80%] overflow-hidden">
        <Image
          src={catData.url}
          alt="Cat image"
          width={catData.width}
          height={catData.height}
          className="object-cover"
        />
      </div>
      <div className="h-[20%] flex flex-col justify-center">
        {await getTime({ revalidationTime })}
      </div>
    </div>
  );
};

const CachePage = async ({ params: { id } }: Props) => {
  console.log("==> Cache page: ", id);
  const revalidateCats = async () => {
    "use server";
    console.log("==> Revalidate cats");
    await revalidateTag("cats");
  };
  return (
    <TwoColumns>
      <Column>
        <RevalidateButton onClick={revalidateCats} />
      </Column>
      <Column>
        <div className="grid grid-rows-2 w-full gap-2 h-full">
          {[10, 15].map((revalidationTime) => (
            <CatImage
              key={revalidationTime}
              revalidationTime={revalidationTime}
            />
          ))}
        </div>
      </Column>
    </TwoColumns>
  );
};

export default CachePage;
