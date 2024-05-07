import { Card, CardContent, CardFooter } from "@/components/ui/card";
import RegisterForm from "./components/form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-3xl font-bold">Register</h1>
      <Card className="w-full min-w-[250px] max-w-[400px] shadow-md">
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="w-full text-center">
            Already have an account?
            <Link className="text-blue-800" href="/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
