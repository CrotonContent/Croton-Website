import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/images/logo.svg" alt="CrotonContent" className="h-8 w-auto" />
      <span className="ml-2 text-2xl font-bold text-indigo-600">CrotonContent</span>
    </Link>
  );
}