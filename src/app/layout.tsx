import { Navigation } from '@/app/components/navigation';
import AuthProvider from '@/components/providers/SessionProvider';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Navigation />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
