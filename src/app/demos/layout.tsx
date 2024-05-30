import { PropsWithChildren } from "react";

const DemoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container bg-primary text-primary-foreground h-screen">
      {children}
    </div>
  );
};

export default DemoLayout;
