import { PropsWithChildren } from "react";

export const Notes = ({ children }: PropsWithChildren) => {
  return (
    <div className="hidden group-[.show-notes]:block notes max-h-screen overflow-auto z-[9999] text-lg">
      {children}
    </div>
  );
};
