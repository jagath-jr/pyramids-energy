import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the primary font
const inter = Inter({ subsets: ["latin"] });

// Define default SEO metadata for the site
export const metadata: Metadata = {
  title: "Pyramids Energy | Transmission & Distribution Solutions Partner",
  description: "Delivering high-voltage electrical and power infrastructure projects with safety, quality, and precision in the UAE.",
  keywords: "electrical services, power transmission, electromechanical contracting, UAE, Pyramids Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ensuppressHydrationWarning">
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-light text-brand-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}