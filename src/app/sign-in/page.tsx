"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Loader } from "lucide-react";
import useLogin from "./_hooks/useLogin";

const SignIn = () => {
  const { mutateAsync: login, isPending } = useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-xl border border-gray-200">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await login({ login: values.email, password: values.password });
          }}
        >
          <Form className="space-y-6">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-indigo-600">
                Sign In
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Enter your email and password to continue
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* EMAIL */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Field
                  name="email"
                  as={Input}
                  type="email"
                  placeholder="you@example.com"
                  className="focus-visible:ring-indigo-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Field
                  name="password"
                  as={Input}
                  type="password"
                  placeholder="••••••••"
                  className="focus-visible:ring-indigo-500"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader className="animate-spin w-5 h-5" />
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignIn;
