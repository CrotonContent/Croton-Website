import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500/10 py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">CrotonContent</span>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                Services
              </Link>
              <Link to="/case-studies" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                Case Studies
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                Blog
              </Link>
            </div>
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