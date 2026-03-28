'use client';

import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matrix-black border-t-2 border-matrix-green mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Name & Description */}
          <div>
            <h3 className="text-matrix-green font-bold text-lg mb-2">
              Afrasiyab Nangyal Kakakhel
            </h3>
            <p className="text-matrix-green-dim text-sm">
              Full Stack Developer | Matrix Style Portfolio
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-matrix-green font-bold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-matrix-green-dim hover:text-matrix-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-matrix-green-dim hover:text-matrix-green transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-matrix-green-dim hover:text-matrix-green transition-colors"
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h4 className="text-matrix-green font-bold text-sm mb-3">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-green-dim hover:text-matrix-green transition-colors text-sm"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-green-dim hover:text-matrix-green transition-colors text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-green-dim hover:text-matrix-green transition-colors text-sm"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-matrix-green-dim pt-6 text-center">
          <p className="text-matrix-green-dim text-sm">
            © {currentYear} Afrasiyab Nangyal Kakakhel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
