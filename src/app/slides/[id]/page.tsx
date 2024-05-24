"use client";

import { useFlags } from "@/components/flag-provider";
import { cn } from "@/lib/utils";
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
  const flags = useFlags();
  const showNotes = flags.flags["show-notes"];
  console.log("==> showNotes", showNotes);

  return (
    <div className={cn("group", showNotes && "show-notes")}>
      <Slide slideId={slideId} />
    </div>
  );
};

export default SlidePage;
