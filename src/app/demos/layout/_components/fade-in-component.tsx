"use client";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = {
  transitionDelay?: number;
};

const FadeInComponent = ({
  children,
  transitionDelay = 2000,
}: PropsWithChildren<Props>) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setHasTransitionedIn(true);
    }, transitionDelay);
  }, [transitionDelay]);

  return (
    <div
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isMounted ? "opacity-100" : "opacity-0 bg-slate-500",
        hasTransitionedIn ? "opacity-100" : ""
      )}
    >
      {children}
    </div>
  );
};

export default FadeInComponent;
