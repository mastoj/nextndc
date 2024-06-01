"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

const RevalidateButton = ({ onClick }: Props) => {
  return (
    <Button onClick={() => onClick()} variant={"destructive"}>
      Revalidate cats
    </Button>
  );
};

export default RevalidateButton;
