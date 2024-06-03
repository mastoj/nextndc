import React, { PropsWithChildren } from "react";

export const ServerClient = ({ children }: PropsWithChildren) => {
  try {
    React.useEffect(() => {
      console.log("ServerClient");
    });
    return (
      <div className="p-8 rounded-md border border-white bg-rose-300 flex flex-col gap-4 justify-center items-center">
        <h2>Server client component (client)</h2>
        {children}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 rounded-md border border-black bg-emerald-300 text-black flex flex-col gap-4 justify-center items-center">
        <h2>Server client component (server)</h2>
        {children}
      </div>
    );
  }
};
