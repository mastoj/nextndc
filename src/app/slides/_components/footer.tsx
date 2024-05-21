"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

type Props = {};

const SlidesFooter = (props: Props) => {
  const pathname = usePathname();
  const [_, slideIdStr] = pathname.split("/slides/");
  const slideId = parseInt(slideIdStr, 10);
  const nextUrl = `/slides/${slideId + 1}`;
  const prevUrl = slideId > 1 ? `/slides/${slideId - 1}` : null;
  return (
    <div className="flex flew-row justify-between text-gray-500">
      <div>@TomasJansson</div>
      <div className="flex flex-row flex-nowrap gap-2">
        {prevUrl && (
          <Link
            href={prevUrl}
            className="flex flex-row flex-nowrap items-center justify-center"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Prev
          </Link>
        )}
        <Link
          href={nextUrl}
          className="flex flex-row flex-nowrap items-center justify-center"
        >
          Next <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default SlidesFooter;
