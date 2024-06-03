import { PropsWithChildren } from "react";

const RSCLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container flex flex-col h-screen w-screen justify-center">
      {children}
    </div>
  );
};

export default RSCLayout;
