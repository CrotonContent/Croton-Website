import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500/10 py-6">
          <div className="flex items-center">
            <Logo />
            <Navigation />
          </div>
          <div>
            <Link
              to="/consultation"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}