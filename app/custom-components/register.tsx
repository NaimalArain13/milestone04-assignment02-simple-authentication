"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SocialLogin from "./social-login";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.status === 201) router.push("/");
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div className="text-2xl text-red-500">{error}</div>
      <h1 className="text-3xl my-3 text-blue-950 font-bold flex gap-3 justify-center items-center">
        Register
      </h1>
      <Card className="bg-gray-300/10">
        <form
          onSubmit={handleSubmit}
          className="my-5 flex flex-col items-center justify-center p-5 shadow-lg rounded-md"
        >
          <div className="my-2">
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              name="name"
              id="name"
              className="my-2   mx-1 border-gray-500 rounded"
            />
          </div>
          <div className="my-2">
            <label htmlFor="email">Email:</label>
            <Input
              type="text"
              name="email"
              id="email"
              className="my-2   mx-1 border-gray-500 rounded"
            />
          </div>
          <div className="my-2">
            <label htmlFor="email">Password:</label>
            <Input
              type="password"
              name="password"
              id="password"
              className="my-2   mx-1 border-gray-500 rounded"
            />
          </div>

          <Button
            type="submit"
            className="w-md text-white rounded-lg text-lg hover:bg-blue-500"
          >
            Register
          </Button>
        </form>

        <span className="text-sm block my-2 text-center text-gray-500">or</span>
        <SocialLogin />
      </Card>
      <p className="my-3">
        Already have an account?{" "}
        <Link href="/" className="text-blue-600 underline ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
