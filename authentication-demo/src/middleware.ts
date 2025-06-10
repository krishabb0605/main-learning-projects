import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// If user not signdin it redirect to signin page when navigating to /user-profile...
// const isProtectedRoute = createRouteMatcher(["/user-profile"])

// If user not signdin it redirect to signin page when navigating page excluding this 3 rooutes.
const isPubliucRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"])

export default clerkMiddleware(async (auth, req) => {
  // if (isProtectedRoute(req)) await auth.protect();
  // if (!isPubliucRoute(req)) await auth.protect();

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