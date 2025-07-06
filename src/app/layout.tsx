import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"], // Specify subsets
  weight: ["400", "700"], // Specify font weights
});

export const metadata: Metadata = {
  title: "Microlab Studio | 3D Printing Service",
  description:
    "Build your dream product with Microlab Studio — a design & 3D printing studio that turns ideas into reality.",
  openGraph: {
    images: [
      {
        url: "/assets/Logo Microlab.png",
        width: 1200,
        height: 630,
        alt: "Microlab Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
