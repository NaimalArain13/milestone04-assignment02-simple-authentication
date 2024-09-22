import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import SignOut from "../../custom-components/logout";

export default async function HomePage() {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div className="flex flex-col items-center m-4">
      {session?.user?.name && session?.user?.image ? (
        <>
          <h1 className="text-3xl my-3">Welcome, {session?.user?.name}</h1>
          <Image
            src={session?.user?.image || ""}
            alt={session?.user?.name || "Default Alt Text"}
            width={72}
            height={72}
            className="rounded-full"
          />
        </>
      ) : (
        <h1 className="text-3xl my-3">Welcome, {session?.user?.email}</h1>
      )}
      <SignOut />
    </div>
  );
}
