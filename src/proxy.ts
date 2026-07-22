import { NextResponse, type NextRequest } from "next/server";

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const referer = request.headers.get("referer");
  const comingFromModal = referer?.includes("/auth") || referer?.includes("/user") || referer?.includes("/product-preview");
  const goingToModal = pathname.includes("/auth") || pathname.includes("/user") || pathname.includes("/product-preview");

  if (goingToModal) {
    const previousPath = request.cookies.get("previousPath")?.value;
    const navigatedInternally = request.cookies.get("navigatedInternally")?.value;

    if (!navigatedInternally && !comingFromModal) {
      return NextResponse.redirect(new URL(previousPath ?? "/", request.url));
    }

    response.cookies.delete("navigatedInternally");
    return response;
  }
  
  return response;
};

export const config = {
  matcher: ["/", "/products", "/admin", "/search", "/wishlist", "/cart", "/checkout", "/payment", "/displays", "/confirm", "/product-preview", "/auth/:path*", "/user/:path*", "/review/:path*", "/collection/:path*", "/blog/:path*", "/posts/:path*"],
};