'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { COLORS } from '@/lib/colors';
import { LanguageSelector } from './LanguageSelector';
import '@/styles/nav.css';

interface NavProps {
  isOpen?: boolean;
  onNavClick?: () => void;
}

export const Nav = ({ isOpen = false, onNavClick }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`nav ${isOpen ? 'mobile-open' : ''}`}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`nav-link ${isActive ? 'active' : ''}`}
            onClick={onNavClick}
          >
            {link.label}
          </Link>
        );
      })}
      <div className="nav-language-selector">
        <LanguageSelector />
      </div>
    </nav>
  );
};
