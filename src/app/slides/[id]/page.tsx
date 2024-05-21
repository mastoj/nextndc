"use client";

import { cn } from "@/lib/utils";
import { VercelToolbar } from "@vercel/toolbar/next";
import { useSearchParams } from "next/navigation";
import { Slide } from "../_slides/config";

type Props = {
  params: {
    id: string;
  };
};

const SlidePage = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const slideId = parseInt(params.id, 10);
  const showToolbar = searchParams.get("toolbar") === "true";
  console.log("==> Show toolbar: ", showToolbar);
  return (
    <div className={cn(searchParams.get("practice") && "group practice")}>
      <Slide slideId={slideId} />
      {showToolbar && <VercelToolbar />}
    </div>
  );
};

export default SlidePage;
