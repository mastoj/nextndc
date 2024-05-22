"use client";

import { useFlags } from "@/components/flag-provider";
import { cn } from "@/lib/utils";
import { FlagValues } from "@vercel/flags/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { useSearchParams } from "next/navigation";
import { Slide } from "../_slides/config";

type Props = {
  params: {
    id: string;
  };
};

const SlidePage = ({ params }: Props) => {
  const { flags } = useFlags();
  const searchParams = useSearchParams();
  const slideId = parseInt(params.id, 10);
  const showToolbar = searchParams.get("toolbar") === "true";
  return (
    <div className={cn(searchParams.get("practice") && "group practice")}>
      <Slide slideId={slideId} />
      {showToolbar && (
        <>
          <VercelToolbar />
          <FlagValues values={flags} />
        </>
      )}
    </div>
  );
};

export default SlidePage;
