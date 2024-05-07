import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LoginForm from "./components/form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-3xl font-bold">Login</h1>
      <Card className="w-full min-w-[250px] max-w-[400px] shadow-md">
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col items-center gap-3">
            <p className="text-center">
              Don&lsquo;t have an account?
              <Link className="text-blue-800" href="/register">
                Register
              </Link>
            </p>
            <Link href="/forgot-password" className="text-blue-800">
              Forgot password?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
