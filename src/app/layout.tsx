'use client'
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
import Navbar from "@/components/Root/Navbar/Navbar";
import Footer from "@/components/Root/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();
  const hideNavAndFooter = pathName === '/login' || pathName === '/register' || pathName === '/dashboard' || pathName === '/dashboard/manage-users';
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" />
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={`${metadata.description}`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        {!hideNavAndFooter && <Navbar />}
        {children}
        {!hideNavAndFooter && <Footer />}
      </body>
    </html>
  );
}
