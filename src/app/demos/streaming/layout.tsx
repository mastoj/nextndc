import { getSlidePathFromName } from "@/app/slides/_slides/config";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {};

const StreamingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-8xl">Streaming</h1>
      {children}
      <Link href={getSlidePathFromName("PPRAndStreaming")}>Slides</Link>
    </div>
  );
};

export default StreamingLayout;
