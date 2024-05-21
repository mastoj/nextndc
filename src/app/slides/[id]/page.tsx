import { cn } from "@/lib/utils";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  const bgColor = parseInt(params.id) % 2 === 0 ? "bg-red-500" : "bg-blue-500";
  return (
    <div className={cn("p-4 w-full h-full", bgColor)}>page: {params.id}</div>
  );
};

export default page;
