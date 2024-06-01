import { PropsWithChildren } from "react";

const RSCLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container flex flex-col h-full justify-center max-w-screen-md">
      {children}
    </div>
  );
};

export default RSCLayout;
