import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          userName: "drcyberx",
          email: "drcyberx@gmail.com",
          password: "123",
        };

        if (
          credentials?.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          console.log("invalid user >> ");
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXT_AUTH_SECRET,
  },
};
