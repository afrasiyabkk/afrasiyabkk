import type { Metadata } from "next";
import "@/styles/globals.css";
import { MatrixBackground } from "@/components/effects/MatrixBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Matrix Style",
  description: "A matrix-style portfolio site showcasing projects, experience, and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="bg-black text-matrix-green min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Matrix Background Effect */}
        <MatrixBackground />

        {/* Header (fixed position) */}
        <Header />

        {/* Main Content (with top padding for fixed header) */}
        <div className="" style={{ paddingTop: "100px" }}>
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
