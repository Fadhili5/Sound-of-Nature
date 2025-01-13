import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/lib/mongodb';
import { User, IUser } from '@/models/user.model';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';
import bcrypt from 'bcryptjs';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      username: string;
      image?: string | null;
    }
  }
  interface User {
    id: string;
    email: string;
    username: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password');
        }

        await connectDB();
        
        const user = await User.findOne({ email: credentials.email }).lean();
        if (!user || !user._id) {
          throw new Error('No user found with this email');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          username: user.username,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 