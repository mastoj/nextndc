import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {};

const StreamingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-8xl">Streaming</h1>
      {children}
      <Link href="/slides/19">Slides</Link>
    </div>
  );
};

export default StreamingLayout;
