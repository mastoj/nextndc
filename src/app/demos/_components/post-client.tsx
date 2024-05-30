"use client";
import { Button } from "@/components/ui/button";
import { PostDto } from "./types";

type Props = {
  post: PostDto;
};

export const PostClient = ({ post: { id, title, userId, body } }: Props) => {
  console.log("Post", id);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
      <Button onClick={() => alert("Hello")}>Click me</Button>
    </div>
  );
};
