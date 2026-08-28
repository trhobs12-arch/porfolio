import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Taufiq | Product Engineer",
  description: "Product Engineer specialising in digital trust, PKI and enterprise integration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
