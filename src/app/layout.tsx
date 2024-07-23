import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sharda ENT Hospital - Haldwani',
  description: 'Sharda ENT Hospital - Best ENT care in Haldwani for Eye, Nose, and Throat.',
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
      <Head>
        <meta name="description" content="Sharda ENT Hospital - Best ENT care in Haldwani for Eye, Nose, and Throat." />
        <meta property="og:image" content="/images/sharda-ent-social.png" />
        <meta property="og:description" content="Sharda ENT Hospital in Haldwani - Comprehensive Care for Eye, Nose, and Throat" />
        <meta property="og:title" content="Sharda ENT Hospital - Haldwani's Best ENT Care" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/sharda-ent-social.png" />
        <meta name="twitter:description" content="Sharda ENT Hospital in Haldwani - Comprehensive Care for Eye, Nose, and Throat" />
        <meta name="twitter:title" content="Sharda ENT Hospital - Haldwani's Best ENT Care" />
      </Head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
