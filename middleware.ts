import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/question/:id",
  "/tags",
  "/profile/:id",
]);

// Define public routes where no authentication is needed
// const isPublicRoute = createRouteMatcher([
//   "/", // Home page is public
//   "/api/webhook", // Webhook should be accessible without authentication
//   "/question/(.)", // Question details are public
//   "/tags", // Listing of tags is public
//   "/tags/(.)", // Specific tag details are public
//   "/community", // Community page is public
//   "/jobs",
//   "/api/chatgpt", // Jobs listing is public
// ]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
