import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'tinacms/dist/react';

export function Hero() {
  const { data } = useQuery('getHero', {
    relativePath: 'home.mdx',
  });

  const page = data?.page || {
    title: 'Traffic Assets for Financial Brands',
    heroImage: '/images/content-strategy.jpg',
    heroImageAlt: 'Strategic content planning dashboard showing analytics and content calendar',
    description: 'Expert content creation and strategy for financial services companies. Drive qualified traffic and convert visitors into customers.',
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {page.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/consultation"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book Strategy Consultation
                </Link>
                <Link to="/case-studies" className="text-sm font-semibold leading-6 text-gray-900">
                  View Case Studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <img
                    src={page.heroImage}
                    alt={page.heroImageAlt}
                    className="w-full rounded-xl shadow-xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}