import { PropsWithChildren } from "react";
import FadeInComponent from "./_components/fade-in-component";
import Menu from "./_components/menu";
import SlideLink from "./_components/slide-link";

const DemoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[400px_auto] h-screen w-screen">
      <div className="border-r h-full shadow-md bg-primary/10 p-8">
        <FadeInComponent>
          <Menu />
        </FadeInComponent>
        <div className="flex flex-row gap-2 mt-8 w-full justify-center">
          <SlideLink />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-stretch">
        <FadeInComponent>
          <h1 className="text-2xl font-bold w-full p-8">Layout demo</h1>
          <div className="p-8 flex-1">{children}</div>
        </FadeInComponent>
      </div>
    </div>
  );
};

export default DemoLayout;
