import React from 'react';
import { Link } from 'react-router-dom';
import { FooterSection } from './FooterSection';
import { navigation } from './navigation';

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="text-2xl font-bold text-white">
              CrotonContent
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Expert content creation and strategy for financial brands.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection title="Solutions" links={navigation.solutions} />
              <div className="mt-10 md:mt-0">
                <FooterSection title="Support" links={navigation.support} />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection title="Company" links={navigation.company} />
              <div className="mt-10 md:mt-0">
                <FooterSection title="Legal" links={navigation.legal} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} CrotonContent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}