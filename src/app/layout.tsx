import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'sharda ent hospital',
  description: 'best ent hospital in haldwani',
};

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
