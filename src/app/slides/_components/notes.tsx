import { PropsWithChildren } from "react";

export const Notes = ({ children }: PropsWithChildren) => {
  return (
    <div className="hidden group-[.show-notes]:block notes">{children}</div>
  );
};
