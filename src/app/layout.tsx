import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const monaSans = localFont({
  src: [
    {
      path: '../../public/fonts/MonaSans/Mona-Sans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/MonaSans/Mona-Sans-Bold.ttf',
      weight: '700',
    },
    
  ],
})

export const metadata: Metadata = {
  title: "Tokena",
  description: "Un dashboard Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monaSans.className}>{children}</body>
    </html>
  );
}
