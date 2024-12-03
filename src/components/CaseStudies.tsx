import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Investment Platform Growth',
    description: 'How we helped a fintech startup achieve 300% organic traffic growth in 6 months.',
    imageUrl: '/images/case-study-1.jpg',
    category: 'SEO Strategy',
  },
  {
    title: 'Wealth Management Content',
    description: 'Creating premium content that attracted high-net-worth clients.',
    imageUrl: '/images/case-study-2.jpg',
    category: 'Content Marketing',
  },
  {
    title: 'Financial Education Scale',
    description: 'Scaling financial education content to reach 1M+ monthly readers.',
    imageUrl: '/images/case-study-3.jpg',
    category: 'Financial Writing',
  },
];

export function CaseStudies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case Studies</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See how we've helped financial brands achieve remarkable growth through strategic content.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={study.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{study.category}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="absolute inset-0" />
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{study.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}