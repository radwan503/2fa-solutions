import { NextResponse,  NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const AUTH_KEY = `${process.env.NEXT_PUBLIC_AUTH_KEY}`;

  const currentUser = request.cookies.get(AUTH_KEY)?.value;

  if (currentUser && request.nextUrl.pathname == "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!currentUser && request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/account/:path*", "/login"],
};
