"use client";

import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { revalidateTagAction } from "./actions";

type Props = {
  tag: string;
};

const RevalidateButton = ({ children, tag }: PropsWithChildren<Props>) => {
  console.log("==> Revalidating: ", tag);
  return (
    <Button onClick={() => revalidateTagAction(tag)} variant={"destructive"}>
      {children}
    </Button>
  );
};

export default RevalidateButton;
