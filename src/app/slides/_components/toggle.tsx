import { cn } from "@/lib/utils";

type Props = {
  on?: boolean;
};

export const Toggle = ({ on }: Props) => {
  return (
    <div
      className={cn(
        `flex items-center w-20 h-8 rounded-full border-white border`,
        on ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      )}
    >
      <div className={`w-6 h-6 rounded-full bg-white mx-1`}></div>
    </div>
  );
};
