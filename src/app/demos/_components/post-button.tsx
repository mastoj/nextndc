"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {};

export const PostButton = (props: Props) => {
  return (
    <Button onClick={() => toast.success("Hello")} variant="secondary">
      Click me
    </Button>
  );
};
