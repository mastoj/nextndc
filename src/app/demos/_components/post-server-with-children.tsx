import { PropsWithChildren } from "react";
import { PostDto } from "./types";

type Props = {
  post: PostDto;
};

export const PostServerWithChildren = ({
  children,
  post: { id, title, userId, body },
}: PropsWithChildren<Props>) => {
  console.log("Post", id);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
      {children}
    </div>
  );
};
