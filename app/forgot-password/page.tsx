import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import ForgotPasswordForm from "./components/form";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPassword() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-3xl font-bold">Forgot Password</h1>
      <Card className="w-full min-w-[250px] max-w-[400px] shadow-md">
        <CardContent className="flex flex-col items-center gap-1 py-5">
          <p>Input your email and we will send you reset password link.</p>
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter>
          <p className="w-full text-center">
            Remember your account?
            <Link className="text-blue-800" href="/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
