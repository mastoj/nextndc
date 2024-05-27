"use client";

import { useFlags } from "@/components/flag-provider";
import { FlagValues } from "@vercel/flags/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { getNumberOfSlides, hasMoreSlides } from "../_slides/config";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { useSlide } from "./slider-provider";

type Props = {};

const SlidesFooter = (props: Props) => {
  const { flags } = useFlags();
  const x = useSlide();
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
      // Liste for key "t" to toggle toolbar
      if (event.key === "t") {
        router.push(toggleToolbarUrl);
      }
      if (event.key === "e") {
        router.push(toggleToolbarUrl);
      }
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

  const newSearchParams = new URLSearchParams(searchParams.toString());
  const showToolbar = searchParams.get("toolbar") === "true";
  if (showToolbar) newSearchParams.delete("toolbar");
  else newSearchParams.set("toolbar", "true");
  const toggleToolbarUrl = `${pathname}?${newSearchParams.toString()}`;

  console.log("==> Show toolbar: ", showToolbar, toggleToolbarUrl);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 text-muted-foreground text-xs md:text-base z-50">
      <div>@TomasJansson</div>
      <Link
        href="https://github.com/mastoj/nextndc"
        className="col-start-1 md:col-start-auto md:text-center"
      >
        https://github.com/mastoj/nextndc
      </Link>
      <div className="flex flex-row justify-end flex-nowrap gap-2">
        <a
          href={toggleToolbarUrl}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-row flex-nowrap items-center justify-center"
        >
          <Wrench />
        </a>
        {prevUrl ? (
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
        ) : (
          <div className="h-4 w-4">&nbsp;</div>
        )}
        <span className="tabular-nums text-nowrap">
          {slideId} / {getNumberOfSlides()}
        </span>
        {hasMoreSlides(slideId) ? (
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
        ) : (
          <div className="h-4 w-4">&nbsp;</div>
        )}
      </div>
      {showToolbar && (
        <>
          <VercelToolbar />
          <FlagValues values={flags} />
        </>
      )}
    </div>
  );
};

export default SlidesFooter;
