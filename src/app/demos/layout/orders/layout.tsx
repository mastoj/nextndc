import { PropsWithChildren } from "react";
import FadeInComponent from "../_components/fade-in-component";

const OrderLayout = ({ children }: PropsWithChildren) => {
  return (
    <FadeInComponent>
      <div className="h-full w-full flex flex-col gap-8">
        <h2 className="text-2xl">Order layout</h2>
        <div className="flex-1 w-full h-full">{children}</div>
      </div>
    </FadeInComponent>
  );
};

export default OrderLayout;
