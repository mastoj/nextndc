import { PropsWithChildren } from "react";
import SlidesFooter from "./_components/footer";
import SliderProvider from "./_components/slider-provider";

const SlidesLayout = ({ children }: PropsWithChildren) => {
  return (
    <SliderProvider>
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-primary text-primary-foreground">
        <div className="flex-1">{children}</div>
      </div>
      <div className="absolute bottom-0 w-screen p-4">
        <SlidesFooter />
      </div>
    </SliderProvider>
  );
};

export default SlidesLayout;
