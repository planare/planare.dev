import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import "@/ui/global.scss";
import { JSX } from "react";

import { Header } from "@/components/Header";
import { Toaster } from "@/ui/Toast";
import { Footer } from "@/components/Footer";

const globalFont = Space_Grotesk({
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Planare",
  description: "Web development studio based in New York.",
  metadataBase: new URL("https://planare.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Toaster />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
} 