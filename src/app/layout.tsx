import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Be Baby e-commerce',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('', inter.className)}>
        <div className='divide-y-[1px] divide-foreground/10'>
          <Header />
          <Navbar />
        </div>
        <main className=''>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
