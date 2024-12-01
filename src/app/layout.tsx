import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers/NexyUiProvider";

 
export const metadata: Metadata = {
  title: "42 Battle",
  description: "Jogo de batalha de codigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body
        className={`antialiased `}
      >
        <Providers>
           {children}
        </Providers>
       
      </body>
    </html>
  );
}
