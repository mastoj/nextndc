"use client";
import Link from "next/link";

type Props = {};

export const RscDemoLinks = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 mt-8">
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc1">
        Only server
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc2">
        Client components
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc3">
        Nested components
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/slides/13">
        Slides
      </Link>
    </div>
  );
};
