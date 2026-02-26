import "dotenv/config";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Briefed",
  description: "Creative brief generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "var(--primary)",
          colorPrimaryForeground: "var(--primary-foreground)",
          colorBackground: "var(--card)", // Clerk uses this for the card container
          colorForeground: "var(--foreground)",
          colorMuted: "var(--muted)",
          colorMutedForeground: "var(--muted-foreground)",
          colorInput: "var(--input)",
          colorInputForeground: "var(--foreground)",
          colorBorder: "var(--border)",
          colorRing: "var(--ring)",
          colorDanger: "var(--destructive)",
          borderRadius: "var(--radius)", // your 0.875rem
          fontFamily: "var(--font-sans)",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
