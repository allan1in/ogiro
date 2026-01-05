import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Storming",
  description: "A platform for brainstorming with AI assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
