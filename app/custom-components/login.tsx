"use client";
import { Button } from "@/components/ui/button";
import SocialLogin from "./social-login";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { doCredentialLogin } from "../actions/server-auth";
import { FormEvent , useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

//Login form
export default function LoginForm() {
  const [error , setError] = useState<string>("");
  const router = useRouter()
  async function handleCredential(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget)
      const response = await doCredentialLogin(formData)
      if(!!response.error){
        setError(response.error.message)
      }else{
        router.push("/home")
      }
    } catch (e) {
      setError("Check your Credentials")
      
    }
  }
  return (
  <>
    <div className="text-2xl text-red-500">{error}</div>
      <Card className="bg-gray-300/10">
    <form onSubmit={handleCredential} className="my-5 flex flex-col items-center justify-center p-5 shadow-lg rounded-md">
      <div className="my-2">
        <label htmlFor="email">Email:</label>
        <Input 
        type="text"
        name="email"
        id="email"
        className="my-2   mx-1 border-gray-500 rounded"/>
      </div>
      <div className="my-2">
      <label htmlFor="email">Password:</label>
        <Input 
        type="text"
        name="password"
        id="password"
        className="my-2   mx-1 border-gray-500 rounded"/>
      </div>
    
        <Button type="submit" 
            className="w-md text-white rounded-lg text-lg hover:bg-blue-500">Login</Button>
     
    </form>
    
      <span className="text-sm block my-2 text-center text-gray-500">or</span>
      <SocialLogin />
      </Card>
      <p className="my-3">Don&#39;t have an account? <Link href="/register" className="underline ml-2 text-blue-600">Register</Link></p>
      </>
  );
}
