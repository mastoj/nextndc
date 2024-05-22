"use client";
import { JsonValue } from "@vercel/flags";
import { PropsWithChildren, createContext, useContext } from "react";

export type FlagContext = {
  flags: Record<string, JsonValue>;
};
export const FlagContext = createContext<FlagContext>({
  flags: {},
});

export const FlagProvider = ({
  flags,
  children,
}: PropsWithChildren<{ flags: Record<string, JsonValue> }>) => {
  return (
    <FlagContext.Provider value={{ flags }}>{children}</FlagContext.Provider>
  );
};

export const useFlags = () => {
  return useContext(FlagContext);
};
