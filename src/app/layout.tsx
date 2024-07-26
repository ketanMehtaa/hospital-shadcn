import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { CSPostHogProvider } from './providers';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sharda ENT Hospital - Haldwani',
  description: 'Sharda ENT Hospital - Best ENT care in Haldwani for Ear, Nose, and Throat.',
  openGraph: {
    title: 'Sharda ENT Hospital - Haldwani\'s Best ENT Care',
    description: 'Sharda ENT Hospital in Haldwani - Comprehensive Care for Ear, Nose, and Throat.',
    images: ['/images/sharda-ent-social.png'],
  },
  icons: {
    icon: [{ url: 'public/1.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <CSPostHogProvider>
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}