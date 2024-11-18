import type { Metadata } from "next";
import localFont from "next/font/local";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "../styles/mdx.css"
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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

export const metadata: Metadata = {
  title: "Domsat - Crafted with Passion and Precision",
  description: "Domsat Company Profile",
  icons: {
    icon: "/assets/images/Favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
