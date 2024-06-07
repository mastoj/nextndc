import { PropsWithChildren } from "react";

export const Notes = ({ children }: PropsWithChildren) => {
  return (
    <div className="hidden group-[.show-notes]:block notes max-h-screen overflow-auto">
      {children}
    </div>
  );
};
