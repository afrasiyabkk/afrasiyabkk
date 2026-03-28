'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { COLORS } from '@/lib/colors';
import '@/styles/nav.css';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
