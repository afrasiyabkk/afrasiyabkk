'use client';

import Link from 'next/link';
import { Nav } from './Nav';
import '@/styles/header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side - Logo/Name */}
        <Link href="/" className="header-logo">
          AFRASIYAB
        </Link>

        {/* Right Side - Navigation */}
        <Nav />
      </div>
    </header>
  );
};
