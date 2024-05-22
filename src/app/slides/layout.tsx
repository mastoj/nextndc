import { FlagProvider } from "@/components/flag-provider";
import { getFlags } from "@/lib/flags";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import SlidesFooter from "./_components/footer";
import SliderProvider from "./_components/slider-provider";

const SlidesLayout = async ({ children }: PropsWithChildren) => {
  const flags = await getFlags(cookies().get("vercel-flag-overrides")?.value);
  const useLightTheme = flags["light-theme"];
  return (
    <FlagProvider flags={flags}>
      <SliderProvider>
        <div
          className={cn(
            "h-screen w-screen overflow-hidden flex flex-col bg-secondary text-secondary-foreground",
            useLightTheme ? "light" : "dark"
          )}
        >
          <div className="flex-1">{children}</div>
        </div>
        <div className="absolute bottom-0 w-screen p-4">
          <SlidesFooter />
        </div>
      </SliderProvider>
    </FlagProvider>
  );
};

export default SlidesLayout;
