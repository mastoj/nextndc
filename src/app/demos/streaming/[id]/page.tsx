import { Suspense } from "react";

type Props = {};

const SlowComponent = async () => {
  // Sleep for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "I'm slow!";
};

const DynamicStreamingPage = async (props: Props) => {
  return (
    <div>
      DynamicStreamingPage:
      <Suspense fallback={<div>Loading some stuff...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
};

export default DynamicStreamingPage;
