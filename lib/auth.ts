import "server-only";

import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { isAllowedAdminEmail, isAllowedGoogleProfile } from "@/lib/security";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider !== "google") return false;
      const verified = Boolean(profile && "email_verified" in profile && profile.email_verified);
      return isAllowedGoogleProfile(user.email, verified);
    },
  },
  pages: {
    error: "/admin",
  },
};

export async function getAdminSession() {
  const session = await getServerSession(authOptions);
  return isAllowedAdminEmail(session?.user?.email) ? session : null;
}
