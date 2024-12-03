import React from 'react';

const metrics = [
  { id: 1, stat: '500%', emphasis: 'Average Traffic Growth', rest: 'within first 6 months' },
  { id: 2, stat: '200+', emphasis: 'Published Articles', rest: 'for financial brands' },
  { id: 3, stat: '85%', emphasis: 'Client Retention Rate', rest: 'over 12 months' },
  { id: 4, stat: '3.5M+', emphasis: 'Monthly Readers', rest: 'across client platforms' },
];

export function Metrics() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by financial brands worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our results speak for themselves
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{metric.emphasis}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{metric.stat}</dd>
                <dd className="text-sm leading-6 text-gray-500">{metric.rest}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}