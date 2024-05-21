import { PropsWithChildren } from "react";

export const TwoColumns = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export const ThreeColumns = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export const MainSlide = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen p-4 px-12 text-5xl flex justify-center items-center text-center leading-loose">
      {children}
    </div>
  );
};
