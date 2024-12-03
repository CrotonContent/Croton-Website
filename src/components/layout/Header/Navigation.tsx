import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

export function Navigation() {
  return (
    <div className="ml-10 hidden space-x-8 lg:block">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="text-sm font-medium text-gray-700 hover:text-indigo-600"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}