"use client";
import Link from "next/link";

type Props = {};

export const RscDemoLinks = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 mt-8 w-full justify-center">
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc1">
        Only servers
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc2">
        Client components
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/demos/rsc3">
        Nested components
      </Link>
      <Link onClick={(e) => e.stopPropagation()} href="/slides/14">
        Slides
      </Link>
    </div>
  );
};
