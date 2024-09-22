import { Button } from "@/components/ui/button";
import doSocialLogin from "../actions/server-auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function SocialLogin(){
    return(
        <form action={doSocialLogin}>
            <div className="grid grid-cols-2 gap-3 px-6 m-4">
               <Button type="submit" name="action" value={"google"} variant={"outline"}
            className="w-full rounded-lg text-lg hover:text-blue-700 flex gap-3 shadow-xl hover:shadow-2xl">
               <FcGoogle size={28}/>  Sign In with Google
            </Button>
            <Button type="submit" name="action" value={"github"} variant={"outline"} 
            className="w-full rounded-lg text-lg hover:text-blue-700 flex gap-3 shadow-xl hover:shadow-2xl">
              <FaGithub size={28}/>  Sign In with GitHub
            </Button> 
            </div>
            
        </form>
    )
}