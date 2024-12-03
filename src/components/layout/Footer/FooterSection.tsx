import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-white">{title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {links.map((item) => (
          <li key={item.name}>
            <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}