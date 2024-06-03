import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const languageCookieName = "nextndc-lang";

const getLanguagePath = (pathname: string) => {
  const languagePath = pathname.split("/")[3];
  return languagePath;
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const languagePath = getLanguagePath(request.nextUrl.pathname);
  const getUrl = (path?: string) =>
    `${request.nextUrl.origin}/demos/i18n${path ? "/" + path : ""}`;

  if (languagePath) {
    const response = NextResponse.redirect(getUrl());
    response.cookies.set(languageCookieName, languagePath);
    return response;
  }
  const languageCookie = request.cookies.get(languageCookieName);
  if (languageCookie) {
    const url = getUrl(languageCookie.value);
    return NextResponse.rewrite(getUrl(languageCookie.value));
  }

  const response = NextResponse.redirect(getUrl());
  response.cookies.set(languageCookieName, "en");
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/demos/i18n/:path*",
};
