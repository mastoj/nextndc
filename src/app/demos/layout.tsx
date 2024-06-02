import { PropsWithChildren } from "react";

const DemoLayout = ({ children }: PropsWithChildren) => {
  return <div className=" h-screen w-screen">{children}</div>;
};

export default DemoLayout;
