import { PropsWithChildren } from "react";

const DemoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" h-screen w-screen bg-primary text-primary-foreground">
      <div className="container flex flex-col h-full justify-center max-w-screen-md">
        {children}
      </div>
    </div>
  );
};

export default DemoLayout;
