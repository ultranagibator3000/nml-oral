'use client';
import { Unbounded } from 'next/font/google';
import { useState } from 'react';
import ThemeToggle from './dmtoggle';

export const unbounded_bold = Unbounded({
  style: ['normal'],
  weight: '800',
  subsets: ['latin'],
});
export const unbounded = Unbounded({
  style: ['normal'],
  weight: '300',
  subsets: ['latin'],
});
export const unbounded_semibold = Unbounded({
  style: ['normal'],
  weight: '600',
  subsets: ['latin'],
});

const navigation = [
  { name: 'Clubs', href: './clubs' },
  { name: 'Matches', href: './matches' },
  { name: 'Table', href: './table' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 md:p-6 lg:px-8"
      >
        <div className="flex-none">
          <a href="/." className="flex items-center gap-2">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/naizablacklogo.png" className="h-6 w-auto" />
            <img
              alt=""
              src="/Line.png"
              className="h-6 w-auto hidden sm:block"
            />
            <img
              alt=""
              src="/nml.png"
              className="h-6 w-auto hidden sm:block"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${unbounded_semibold.className} antialiased hover:text-yellow-400 dark:text-yellow-400 dark:hover:text-gray-500 text-base font-bold leading-6`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-yellow-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-none lg:gap-6 lg:justify-end">
            <button
              className={`${unbounded.className} inline-flex items-center rounded-xl bg-white px-2 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-500 dark:text-white dark:hover:ring-yellow-400 dark:hover:text-yellow-400`}
            >
              Login
            </button>
            <a
              href="#"
              className={`${unbounded.className} antialiased inline-flex items-center rounded-xl bg-black px-3 py-1 hover:text-black hover:bg-yellow-400 text-sm font-medium text-white`}
            >
              Sign in &gt;
            </a>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="/." className="flex items-center gap-2">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/naizablacklogo.png" className="h-6 w-auto" />
              <img
                alt=""
                src="/Line.png"
                className="h-6 w-auto hidden sm:block"
              />
              <img
                alt=""
                src="/nml.png"
                className="h-6 w-auto hidden sm:block"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-yellow-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${unbounded_semibold.className} block text-base font-bold leading-6 text-gray-900 dark:text-yellow-400`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 space-y-4">
                <button
                  className={`${unbounded.className} w-full inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-500 dark:text-white dark:hover:ring-yellow-400 dark:hover:text-yellow-400`}
                >
                  Login
                </button>
                <a
                  href="#"
                  className={`${unbounded.className} w-full inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:bg-yellow-400 hover:text-black`}
                >
                  Sign in &gt;
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
