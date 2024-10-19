import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FiniHub – Earn with Referrals and Unlock Financial Growth",
  description: `Join FiniHub, the ultimate platform for earning money through referrals. Subscribe to the Pro Plan for just 500 BDT, invite friends, and get rewarded with 100 BDT for each successful referral. With secure payouts and multiple payment options including bKash and Nagad, FiniHub is the easiest way to grow your income. Sign up today and start earning!`,
  keywords: "FiniHub, earn money online, referral earnings, refer and earn, financial growth, BDT income, referral platform, bKash payment, Nagad payment, Pro Plan, referral payouts",
  openGraph: {
    type: 'website',
    url: 'https://www.finihub.com',
    title: 'FiniHub – Earn Money with Referrals',
    description: 'Earn 100 BDT for every friend you refer to FiniHub after subscribing to our Pro Plan. Join the easiest way to grow your finances through referrals.',
    images: [
      {
        url: 'https://www.finihub.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FiniHub – Earn with Referrals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiniHub – Earn Money with Referrals',
    description: 'Join FiniHub, invite friends, and earn 100 BDT for every successful referral! Unlock financial growth today.',
    images: 'https://www.finihub.com/images/twitter-card.jpg', 
  }
};
