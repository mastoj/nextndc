"use client";

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
  return (
    <div className={cn(searchParams.get("practice") && "group practice")}>
      <Slide slideId={slideId} />
    </div>
  );
};

export default SlidePage;
