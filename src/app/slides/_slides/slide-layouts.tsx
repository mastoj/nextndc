import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export const Column = ({
  title,
  children,
}: PropsWithChildren<{
  title?: string;
}>) => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] gap-8 py-12">
      {title && (
        <div className="flex flex-row justify-center text-5xl">{title}</div>
      )}
      <div className="gap-8 justify-center">{children}</div>
    </div>
  );
};

const columnLookup: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
};

export const Columns = ({
  children,
  columnCount,
}: PropsWithChildren<{ columnCount: number }>) => {
  return (
    <div className={cn("grid gap-8 h-screen", columnLookup[columnCount])}>
      {children}
    </div>
  );
};

export const TwoColumns = ({
  titleColumn1,
  titleColumn2,
  column1,
  column2,
}: {
  titleColumn1?: string;
  titleColumn2?: string;
  column1: React.ReactNode;
  column2: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-2 gap-8 h-screen">
      <Column title={titleColumn1}>{column1}</Column>
      <Column title={titleColumn2}>{column2}</Column>
    </div>
  );
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
      <div className="absolute h-screen w-screen top-0 left-0 p-4 px-12 flex flex-col gap-4 justify-center items-center text-center bg-transparent z-10">
        {children}
      </div>
    </>
  );
};
