import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export const TwoColumns = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export const ThreeColumns = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

const BackgroundImageWithBackdrop = ({
  imgData,
}: {
  imgData: StaticImageData;
}) => (
  <div className="absolute top-0 left-0 w-screen h-screen">
    <Image
      src={imgData}
      alt="background"
      className="w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/80">
      &nbsp;
    </div>
  </div>
);

export const MainSlide = ({
  children,
  imgUrl,
}: PropsWithChildren<{
  imgUrl?: StaticImageData;
}>) => {
  return (
    <>
      {imgUrl && <BackgroundImageWithBackdrop imgData={imgUrl} />}
      <div className="absolute h-screen w-screen p-4 px-12 text-5xl flex justify-center items-center text-center leading-loose bg-transparent z-10">
        {children}
      </div>
    </>
  );
};
