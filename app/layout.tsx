import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XAVIER RAHMAN // TAKE THE WEB",
  description:
    "Personal portfolio of Xavier Rahman — Computer Science student at Simon Fraser University. Developer, innovator, problem solver.",
  keywords: ["Xavier Rahman", "developer", "portfolio", "SFU", "computer science", "software engineer"],
  authors: [{ name: "Xavier Rahman" }],
  openGraph: {
    title: "XAVIER RAHMAN // TAKE THE WEB",
    description: "Developer • Innovator • Problem Solver",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
