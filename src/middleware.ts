import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname.includes("/auth")) {
    const previousPath = request.cookies.get("previousPath")?.value;
    const navigatedInternally = request.cookies.get("navigatedInternally")?.value;
    const referer = request.headers.get("referer");

    const comingFromAuth = referer?.includes("/auth");

    if (!navigatedInternally && !comingFromAuth) {
      return NextResponse.redirect(new URL(previousPath ?? "/", request.url));
    }

    const response = NextResponse.next();
    response.cookies.delete("navigatedInternally");
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set("previousPath", pathname);
  response.cookies.set("navigatedInternally", "true");
  return response;
};

export const config = {
  matcher: ["/", "/product", "/wishlist", "/cart", "/checkout", "/payment", "/displays", "/auth/:path*", "/review/:path*", "/collection/:path*", "/blog/:path*", "/posts/:path*"],
};
