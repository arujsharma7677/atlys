import type { Metadata } from 'next';
import { poppins } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'atlys App',
  description: 'Generated by create atlys app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('\x1b[31m%s\x1b[0m', `Loaded: .env.${process.env.NEXT_PUBLIC_ENV}`);

  return (
    <html lang="en" className="h-full w-full">
      <link rel="icon" href="favicon.ico" sizes="16x16" />

      <body className={`h-full w-full overscroll-none font-poppins ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
