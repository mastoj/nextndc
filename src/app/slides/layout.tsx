import { PropsWithChildren } from "react";
import SlidesFooter from "./_components/footer";

const SlidesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col p-4 bg-black text-white">
      <div className="flex-1">{children}</div>
      <SlidesFooter />
    </div>
  );
};

export default SlidesLayout;
