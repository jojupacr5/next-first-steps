import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const inter = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
