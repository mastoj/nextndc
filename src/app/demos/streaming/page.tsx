import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const QueryParamComponent = async ({ searchParams }: Props) => {
  // Sleep for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Hello query! {JSON.stringify(searchParams)}</div>;
};

const Content = async () => {
  // Sleep for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Hello static!</div>;
};
const StaticStreamingPage = async ({ searchParams }: Props) => {
  return (
    <div className="">
      StaticStreamingPage:{" "}
      <Suspense>
        <Content />
      </Suspense>
      <Suspense fallback={<div>Loading some stuff...</div>}>
        <QueryParamComponent searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default StaticStreamingPage;
