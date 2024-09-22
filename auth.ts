import NextAuth, { CredentialsSignin} from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "./model/user-model";
import bcrypt from "bcrypt";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials:{
        email:{},
        password:{},
      },
        async authorize(credentials:any){
          if(credentials === null) return null;
          
            try {
                const user = await User.findOne({
                  email:credentials?.email
                })
                console.log(user);
                if(user){
                    const isMatch = await bcrypt.compare(
                      credentials.password,
                            user.password
                    )
                    if(isMatch){
                        return user;
                    }else{
                        throw new Error("Email or Password is not correct")
                    }

                }else{
                    throw new Error("User not found")
                }
            } catch (error) {
                throw new Error("Check your credentials")
                
            }
        }
    }),
    Google({
      clientId: "1075733175556-cl24brqoedj5o0i89b6nmfhj8dsfu5ut.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: "Ov23lijDzWDFkRTBvyDc",
      clientSecret: "24c49422d38def31969006f860a3f30b950baea7",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
