import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const monaSans = localFont({
  src: [
    {
      path: "../../public/fonts/MonaSans/Mona-Sans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MonaSans/Mona-Sans-Bold.ttf",
      weight: "700",
    },
  ],
});

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
      <body className={monaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
