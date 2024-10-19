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
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" />

        {/* Title */}
        <title>{`${metadata.title}`}</title>

        {/* Meta Description */}
        <meta name="description" content={`${metadata.description}`} />

        {/* Keywords */}
        <meta name="keywords" content="FiniHub, earn money online, referral earnings, refer and earn, financial growth, BDT income, referral platform, bKash payment, Nagad payment, Pro Plan, referral payouts" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finihub.com" />
        <meta property="og:title" content="FiniHub – Earn Money with Referrals" />
        <meta property="og:description" content="Earn 100 BDT for every friend you refer to FiniHub after subscribing to our Pro Plan. Join the easiest way to grow your finances through referrals." />
        <meta property="og:image" content="https://www.finihub.com/images/og-image.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FiniHub – Earn Money with Referrals" />
        <meta name="twitter:description" content="Join FiniHub, invite friends, and earn 100 BDT for every successful referral! Unlock financial growth today." />
        <meta name="twitter:image" content="https://www.finihub.com/images/twitter-card.jpg" />

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
