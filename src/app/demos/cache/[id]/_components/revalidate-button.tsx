"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { revalidateTagAction } from "./actions";

type Props = {
  tag: string;
};

const RevalidateButton = ({ children, tag }: PropsWithChildren<Props>) => {
  const router = useRouter();
  console.log("==> Revalidating: ", tag);
  const handleRevalidate = async () => {
    await revalidateTagAction(tag);
    router.refresh();
  };
  return (
    <Button onClick={handleRevalidate} variant={"destructive"}>
      {children}
    </Button>
  );
};

export default RevalidateButton;
