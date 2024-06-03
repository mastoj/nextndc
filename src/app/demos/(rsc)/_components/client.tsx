"use client";
import { PropsWithChildren } from "react";
import { ServerClient } from "./server-client";

export const Client = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-8 rounded-md border border-white bg-rose-300 flex flex-col gap-4 justify-center items-center">
      <h2>Client component</h2>
      <ServerClient />
      {children}
    </div>
  );
};
