"use client";

import { ClerkProvider, useAuth, RedirectToSignIn } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  AuthLoading,
  Authenticated,
  Unauthenticated,
  ConvexReactClient,
} from "convex/react";
import { Loading } from "@/components/auth/loading";
import { usePathname } from "next/navigation";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

const convex = (() => {
  if (!convexUrl) {
    if (process.env.NODE_ENV !== "production") {
      // In dev, log a clear message instead of crashing
      // eslint-disable-next-line no-console
      console.error(
        "Missing NEXT_PUBLIC_CONVEX_URL. Please set it in your environment."
      );
    }
    // Create a dummy client to avoid runtime crash; UI will still show auth fallback
    return new ConvexReactClient("/");
  }
  return new ConvexReactClient(convexUrl);
})();

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  const pathname = usePathname();
  const isPublicRoute =
    pathname === "/" ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up");
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          {isPublicRoute ? children : <RedirectToSignIn />}
        </Unauthenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
