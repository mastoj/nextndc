import { getSlidePathFromName } from "@/app/slides/_slides/config";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {};

const StreamingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 py-8">
      <h1 className="text-8xl">Streaming</h1>
      <div className="flex-1">{children}</div>
      <Link href={getSlidePathFromName("PPRAndStreaming")}>Slides</Link>
    </div>
  );
};

export default StreamingLayout;
