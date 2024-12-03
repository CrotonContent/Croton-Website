import React from 'react';

const clients = [
  { name: 'Forbes Advisor', logo: '/logos/forbes-advisor.svg' },
  { name: 'Moneywise', logo: '/logos/moneywise.svg' },
  { name: 'The Average Joe', logo: '/logos/average-joe.svg' },
];

export function SocialProof() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by leading financial publications and brands
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clients.map((client) => (
            <img
              key={client.name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={client.logo}
              alt={client.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}