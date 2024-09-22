"use server";
import { signIn , signOut} from "@/auth";


    export default async function doSocialLogin(formData:FormData){
    const action = formData.get("action") as string |null;
    if(action){

        await signIn(action, {redirectTo:"/home"})
    }
}
export async function doSignOut(){
    await signOut({redirectTo :"/"})

}
export async function doCredentialLogin(formData:FormData){
    try {
        const response = await signIn("credentials" , {
            email:formData.get("email") as string | null,
            password:formData.get("password") as string | null,
            redirect:false,
        })
        return response
    } catch (err) {
        throw new Error("Error")
    }
    

}