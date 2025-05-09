"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmailVerifiedPage() {
  return (
    <div className="flex grow items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-green-800">
            Email Verified!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            Your email has been successfully verified.
          </p>
          <Link href="/">
            <Button className="w-full cursor-pointer">Go to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
