"use client";

import { Slide } from "../_slides/config";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  const slideId = parseInt(params.id, 10);
  return (
    <div>
      <Slide slideId={slideId} />
    </div>
  );
};

export default page;
