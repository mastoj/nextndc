import { Column, TwoColumns } from "@/app/slides/_components/slide-layouts";
import Image from "next/image";

type Props = {};

// Get random cat image url
const getRandomCat = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: {
      revalidate: 20,
      tags: ["cats"],
    },
  });
  const data = await response.json();
  console.log("==> url", data);
  return data[0].url;
};

const CachePage = async (props: Props) => {
  const catUrl = await getRandomCat();
  return (
    <TwoColumns>
      <Column>
        <div className="flex flex-col w-full justify-center gap-2 h-full">
          <Image
            src={catUrl}
            alt="Cat image"
            width={200}
            height={200}
            className="w-1/2"
          />
          <Image
            src={catUrl}
            alt="Cat image"
            width={200}
            height={200}
            className="w-1/2"
          />
        </div>
      </Column>
      <Column>
        <Image src={catUrl} alt="Cat image" width={200} height={200} />
      </Column>
    </TwoColumns>
  );
};

export default CachePage;
