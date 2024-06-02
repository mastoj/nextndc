"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { buttonClickAction } from "./actions";

type Props = {};

export const ClientDemo = (props: Props) => {
  const handleClick = async () => {
    const result = await buttonClickAction();
    toast.success(result);
  };
  return <Button onClick={handleClick}>Click me</Button>;
};
