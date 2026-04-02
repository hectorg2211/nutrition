import type { Metadata, Viewport } from "next";
import { Geist_Mono, Nunito, PT_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahomi — Nutrición pediátrica",
  description:
    "Consultas, guías y productos para mejorar la alimentación de niñas y niños.",
  appleWebApp: {
    capable: true,
    title: "Nahomi",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#e6b3ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${ptSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${ptSans.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
