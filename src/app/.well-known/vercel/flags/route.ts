import { verifyAccess, type ApiData } from "@vercel/flags";
import { NextResponse, type NextRequest } from "next/server";
import { getFlags } from "../../../../lib/flags";

export async function GET(request: NextRequest) {
  const flags = await getFlags();
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

  const featureFlags = Object.keys(flags).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        options: [
          { value: false, label: "Off" },
          { value: true, label: "On" },
        ],
      },
    }),
    {}
  );
  const response = {
    definitions: {
      ...featureFlags,
    },
  };

  return NextResponse.json<ApiData>(response);
}
