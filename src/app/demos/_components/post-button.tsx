"use client";
import { Button } from "@/components/ui/button";

type Props = {};

export const PostButton = (props: Props) => {
  return <Button onClick={() => alert("Hello")}>Click me</Button>;
};
