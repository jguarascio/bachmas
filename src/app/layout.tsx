import type { Metadata } from "next";
import { Crimson_Text, Playfair_Display } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bachmas - Celebrating Johann Sebastian Bach",
  description: "A celebration of Johann Sebastian Bach's birthday and musical legacy. Join us in commemorating the life and works of one of history's greatest composers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${playfairDisplay.variable}`}>
      <body className="bg-bach-parchment text-bach-ink font-serif">
        {children}
      </body>
    </html>
  );
}
