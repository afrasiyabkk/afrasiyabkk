import type { Metadata } from "next";
import "@/styles/globals.css";
import { MatrixBackground } from "@/components/effects/MatrixBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Afrasiyab Nangyal Kakakhel",
  description: "A matrix-style portfolio site showcasing projects, experience, and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{
        backgroundColor: '#000000',
        color: '#00ff00',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowX: 'hidden',
      }}>
        <LanguageProvider>
          {/* Matrix Background Effect */}
          <MatrixBackground />

          {/* Header (fixed position) */}
          <Header />

          {/* Main Content (grows to fill space, pushing footer to bottom) */}
          <div style={{
            flex: 1,
            paddingTop: '100px',
            paddingBottom: '280px',
            position: 'relative',
            zIndex: 10,
          }}>
            {children}
          </div>

          {/* Footer (always at bottom) */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
