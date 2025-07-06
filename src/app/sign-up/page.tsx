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
import { Wrench } from "lucide-react";
import * as Yup from "yup";
import useRegister from "./_hooks/useRegister";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const SignUp = () => {
  const { mutateAsync: register, isPending } = useRegister();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4 sm:px-6">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-xl border border-gray-200">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await register(values);
          }}
        >
          <Form className="space-y-6 p-4 sm:p-6">
            <CardHeader className="text-center space-y-1">
              <CardTitle className="text-3xl font-bold text-indigo-600">
                Sign Up
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Enter your details below to register
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Field
                  name="name"
                  as={Input}
                  type="text"
                  placeholder="Your Name"
                  className="focus-visible:ring-indigo-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Field
                  name="password"
                  as={Input}
                  type="password"
                  placeholder="*******"
                  className="focus-visible:ring-indigo-500"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-2">
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
                disabled={isPending}
              >
                {isPending ? (
                  <Wrench className="animate-spin w-5 h-5" />
                ) : (
                  "Register"
                )}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignUp;
