import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * MainLayout - Wrapper component for page content
 * Provides consistent padding and max-width across all pages
 * Used inside the root layout between Header and Footer
 */
export const MainLayout = ({ children, className = '' }: MainLayoutProps) => {
  return (
    <main className={`max-w-7xl mx-auto px-6 py-12 w-full ${className}`}>
      {children}
    </main>
  );
};
