import { RscDemoLinks } from "@/components/demo/rsc-demo-links";
import { PostClient } from "../../_components/post-client";

type Props = {};

const getRandomData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return response.json();
};

const ServerPage = async (props: Props) => {
  const post = await getRandomData();
  console.log("ServerPage");
  return (
    <>
      <PostClient post={post} />
      <RscDemoLinks />
    </>
  );
};

export default ServerPage;
