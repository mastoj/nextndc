import { PostDto } from "./types";

type Props = {
  post: PostDto;
};

export const Post = ({ post: { id, title, userId, body } }: Props) => {
  console.log("Post", id);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
};
