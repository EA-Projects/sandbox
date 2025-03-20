import type { Metadata } from "next";

// Styles
import "./globals.css";
import './styles/custom.scss';

//Fonts
import { DM_Sans, Fira_Mono, Outfit } from 'next/font/google';

export const metadata: Metadata = {
  title: "Reasoner - Sandbox",
  description: "Built for AI Stacks that demand precision and accuracy.",
  robots: {
    index: false,
    follow: false,
  },
};

const dm_sans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],   
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const outfit = Outfit({
  weight: ['400', '500', '600'],
  subsets: ['latin'],   
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fira_mono = Fira_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],     
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} antialised`}
      >
        {children}
      </body>
    </html>
  );
}
