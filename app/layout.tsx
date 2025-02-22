import type { Metadata } from "next";

// Styles
import "./globals.css";

//Fonts
import { DM_Sans, Fira_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: "Reasoner - Sandbox",
  description: "Built for AI Stacks that demand precision and accuracy.",
};

const dm_sans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],   
});

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
        className={`${dm_sans.className} ${fira_mono.className} antialised`}
      >
        {children}
      </body>
    </html>
  );
}
