import { Button } from "@/components/ui/button";
import { doSignOut } from "../actions/server-auth";


//logout form
export default function SignOut() {
  return(
    <form action={doSignOut}>
    <Button
      type="submit"
      variant={"outline"}
      className="text-xl rounded-md p-2 my-2"
    >
      Sign Out
    </Button>
  </form>
  )
  
}
