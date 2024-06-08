"use client";

import { getSlidePathFromName } from "@/app/slides/_slides/config";
import Link from "next/link";

const SlideLink = (props: unknown) => {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      href={getSlidePathFromName("Layout")}
    >
      Slides
    </Link>
  );
};

export default SlideLink;
