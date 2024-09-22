import LoginForm from "./custom-components/login";
import { GiDoorHandle } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
   <h1 className="text-3xl my-3 text-blue-950 font-bold flex gap-3 justify-center items-center">Hey, time to Get In... <GiDoorHandle size={30}/></h1> 
     
      <LoginForm />
    </div>
  );
}
