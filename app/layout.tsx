import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Services Accordion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
