import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/base.css";
import "../styles/shadows.css";
import "../styles/colors.css";
import Provider from "@/components/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowerViewer",
  description: "Explore electricity data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
