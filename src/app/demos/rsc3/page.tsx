import { PostButton } from "../_components/post-button";
import { PostServerWithChildren } from "../_components/post-server-with-children";

type Props = {};

const getRandomData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return response.json();
};

const ServerPage = async (props: Props) => {
  const post = await getRandomData();
  console.log("ServerPage", post);
  return (
    <PostServerWithChildren post={post}>
      <PostButton />
    </PostServerWithChildren>
  );
};

export default ServerPage;
