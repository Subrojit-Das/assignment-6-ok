import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import TecnoContext from "./context/TecnoContext";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "@/config/toastConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Workout app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TecnoContext>
          <Toaster {...toastOptions} />
          <Navbar />
          {children}
          <Footer />
        </TecnoContext>
      </body>
    </html>
  );
}