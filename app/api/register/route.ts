import { NextRequest, NextResponse } from "next/server";
import createUser from "../../queries/users";
import bcrypt from "bcrypt";
import  dbConnection from "@/lib/mongo";
import { UserData } from "@/types/userType";

export const POST = async (request:NextRequest) => {
  const { name, email, password }: UserData = await request.json();
  console.log(name, email, password);

  //create DB connection
  await dbConnection();
  console.log(dbConnection() , "connected")

  //encrypt a password
  const hashedPassword = await bcrypt.hash(password, 10);
  //form a db payload
  const newUser:UserData= {
    email,
    name,
    password: hashedPassword,
  };

  //update the db
  try {
    await createUser(newUser);
  } catch (error: unknown) {
    if(error instanceof Error){
      return new NextResponse(error.message , {status:500})
    };
  };
  return new NextResponse("User has been created", {
    status: 201,
  });
};
