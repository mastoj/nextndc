import { PropsWithChildren } from "react";

const DemoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" h-screen w-screen bg-primary text-primary-foreground">
      {children}
    </div>
  );
};

export default DemoLayout;
