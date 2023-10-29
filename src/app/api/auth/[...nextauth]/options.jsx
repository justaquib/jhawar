import CredentialsProvider from "next-auth/providers/credentials"
// import { authenticate } from "@/services/authService"

export const options = {
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
        //   async authorize (credentials, req) {
        //     if (typeof credentials !== "undefined") {
        //       const res = await authenticate(credentials.email, credentials.password)
        //       if (typeof res !== "undefined") {
        //         return { ...res.user, apiToken: res.token }
        //       } else {
        //         return null
        //       }
        //     } else {
        //       return null
        //     }
        //   }
        })
      ],
      session: { strategy: "jwt" }
    // pages:{
    //     signIn: "/signin",
    // }
}