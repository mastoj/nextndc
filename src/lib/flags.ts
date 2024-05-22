import { get } from "@vercel/edge-config";
import { FlagOverridesType, decrypt } from "@vercel/flags";

export const getFlags = async (overrideString?: string) => {
  const flags = (await get("flags")) as Record<string, boolean>;
  if (!overrideString) return flags;
  const overrides = overrideString
    ? (await decrypt<FlagOverridesType>(overrideString)) ?? {}
    : {};
  return { ...flags, ...overrides };
};
