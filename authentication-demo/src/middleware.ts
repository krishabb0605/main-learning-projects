import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// If user not signdin it redirect to signin page when navigating to /user-profile...
// const isProtectedRoute = createRouteMatcher(["/user-profile"])

// If user not signdin it redirect to signin page when navigating page excluding this 3 rooutes.
const isPubliucRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"])
const isAdminRoute = createRouteMatcher(["/admin(.*)"])

export default clerkMiddleware(async (auth, req) => {
  // if (isProtectedRoute(req)) await auth.protect();
  // if (!isPubliucRoute(req)) await auth.protect();
  const role = (await auth()).sessionClaims?.metadata?.role;

 if (isAdminRoute(req) && (!role || !role.includes("admin"))) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  const { userId, redirectToSignIn } = await auth();

  if (!userId && !isPubliucRoute(req)) {
    // You can add custom logic to run before redirecting.
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};