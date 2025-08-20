import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inklore | Books, Stories & Timeless Reads",
  description:
    "Explore Inklore, your online bookstore for bestsellers, classics, and hidden gems. Discover stories that inspire, comfort, and stay with you forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
