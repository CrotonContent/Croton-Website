import React from 'react';
import { AcademicCapIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Business School Expertise',
    description: 'Content strategists with top-tier MBA backgrounds bringing business acumen to your content.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Revenue-Focused Strategy',
    description: 'Data-driven approach focused on converting traffic into measurable business results.',
    icon: ChartBarIcon,
  },
  {
    name: 'ROI-Driven Content',
    description: 'Every piece of content is crafted with clear business objectives and measurable outcomes.',
    icon: CurrencyDollarIcon,
  },
];

export function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Business expertise meets content excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine deep business knowledge with content expertise to deliver measurable results for financial brands.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}