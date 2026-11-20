import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Lavish Bowl | Loaded. Crispy. Legendary.",
  description: "Experience premium loaded bowls and crispy sides at The Lavish Bowl. Loaded. Crispy. Legendary.",
  icons: {
    icon: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0B0B0B] text-white selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
