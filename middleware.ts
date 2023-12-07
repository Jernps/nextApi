import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify, importJWK } from "jose";

export async function middleware(request: NextRequest) {
  // try {
  //   const token = request.cookies.get("token")?.value;

  //   if (!token) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   const secretJWK = {
  //     kty: "oct",
  //     k: process.env.JWT_SECRET,
  //   };

  //   const secretKey = await importJWK(secretJWK, "HS256");
  //   const { payload } = await jwtVerify(token, secretKey);

  //   console.log("token from middleware ", token);
  //   console.log("payload from middleware ", payload);

  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const secretJWK = {
      kty: "oct",
      k: "qwerty",
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);
    console.log("token from middleware.ts", token);
    console.log("payload from middleware.ts", payload);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
    console.log("error from middleware.ts", error);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
