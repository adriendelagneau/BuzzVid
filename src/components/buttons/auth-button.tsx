"use client";

import { UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { UserButton } from "@/components/buttons/user-button";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth/auth-client";

// Skeleton for the auth button
const AuthButtonSkeleton = () => (
  <div className="mx-2">
    <Skeleton className="h-8 w-8 rounded-full" />
  </div>
);

// Inner logic component for session logic
const AuthContent = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <AuthButtonSkeleton />;

  return (
    <div>
      {user ? (
        <UserButton />
      ) : (
        <Link href="/sign-in" className="cursor-pointer">
          <Button variant="ghost">
            <UserCircleIcon className="h-9 w-9" />
          </Button>
        </Link>
      )}
    </div>
  );
};

// Export with Suspense wrapper
export const AuthButton = () => (
  <Suspense fallback={<AuthButtonSkeleton />}>
    <AuthContent />
  </Suspense>
);
