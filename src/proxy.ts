import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const referer = request.headers.get("referer");
  const response = NextResponse.next();
  const comingFromModal = referer?.includes("/auth") || referer?.includes("/user") || referer?.includes("/product-preview");
  const goingToModal = pathname.includes("/auth") || pathname.includes("/user") || pathname.includes("/product-preview");

  if (!goingToModal) return response;

  const previousPath = request.cookies.get("previousPath")?.value;

  const navigatedInternally = request.cookies.get("navigatedInternally")?.value === "true";

  if (!navigatedInternally && !comingFromModal) {
    return NextResponse.redirect(new URL(previousPath ?? "/", request.url));
  }

  response.cookies.delete("navigatedInternally");

  return response;
};

export const config = {
  matcher: ["/", "/products", "/admin", "/search", "/wishlist", "/cart", "/checkout", "/payment", "/displays", "/confirm", "/product-preview", "/auth/:path*", "/user/:path*", "/review/:path*", "/collection/:path*", "/blog/:path*", "/posts/:path*"],
};
