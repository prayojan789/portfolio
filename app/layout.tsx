import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

const NextProgress = dynamic(() => import("@/components/next-progress"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prayojan Puri Portfolio",
  description:
    "My name is Prayojan Puri. I am passionate about building and crafting web application. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <NextProgress />
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
