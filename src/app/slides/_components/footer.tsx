"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { hasMoreSlides } from "../_slides/config";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { useSlide } from "./slider-provider";

type Props = {};

const SlidesFooter = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { forward, back } = useSlide();
  const [_, slideIdStr] = pathname.split("/slides/");
  const slideId = parseInt(slideIdStr, 10);
  const nextUrl = `/slides/${slideId + 1}?${searchParams.toString()}`;
  const prevUrl =
    slideId > 1 ? `/slides/${slideId - 1}?${searchParams.toString()}` : null;

  const nextSlide = useCallback(() => {
    if (hasMoreSlides(slideId)) {
      forward();
      router.push(nextUrl);
    }
  }, [nextUrl, router, forward]);

  const prevSlide = useCallback(() => {
    if (prevUrl != null) {
      back();
      router.push(prevUrl);
    }
  }, [prevUrl, router, back]);

  // Effect that listens to right and left arrow keys to do a router push to the next or previous slide
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || (event.key === "Enter" && nextUrl)) {
        nextSlide();
      }
      if (event.key === "ArrowLeft" && prevUrl) {
        prevSlide();
      }
    };
    const mouseClickHandler = (event: MouseEvent) => {
      nextSlide();
    };
    window.addEventListener("click", mouseClickHandler);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", mouseClickHandler);
    };
  }, [nextUrl, prevUrl, router, nextSlide, prevSlide]);

  return (
    <div className="flex flew-row justify-between text-muted-foreground">
      <div>@TomasJansson</div>
      <div className="flex flex-row flex-nowrap gap-2">
        {prevUrl && (
          <Link
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              prevSlide();
            }}
            href={prevUrl}
            className="flex flex-row flex-nowrap items-center justify-center"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        )}
        {hasMoreSlides(slideId) && (
          <Link
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              nextSlide();
            }}
            href={nextUrl}
            className="flex flex-row flex-nowrap items-center justify-center"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SlidesFooter;
