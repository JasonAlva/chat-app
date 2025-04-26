"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  ConvexReactClient,
  Authenticated,
  AuthLoading,
  Unauthenticated,
} from "convex/react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
const convex = new ConvexReactClient(CONVEX_URL);

const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const ConvexClientProviders = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProviders;
