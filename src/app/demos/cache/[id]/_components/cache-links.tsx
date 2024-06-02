"use client";
import Link from "next/link";

type Props = {};

const CacheLinks = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 mt-8 w-full justify-center">
      <Link onClick={(e) => e.stopPropagation()} href="/slides/17">
        Slides
      </Link>
    </div>
  );
};

export default CacheLinks;
