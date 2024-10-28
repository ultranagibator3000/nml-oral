'use client'
import { Unbounded } from 'next/font/google'
import ThemeToggle from './dmtoggle';
export const unbounded_bold = Unbounded({ 
    style: ['normal'],
    weight: "800",
    subsets: ['latin']
});
export const unbounded = Unbounded({ 
    style: ['normal'],
    weight: "300",
    subsets: ['latin']
});
export const unbounded_semibold = Unbounded({ 
    style: ['normal'],
    weight: "600",
    subsets: ['latin']
  });
const navigation = [
    { name: 'Clubs', href: './clubs' },
    { name: 'Matches', href: './matches' },
    { name: 'Table', href: './table' },
  ]

export const Header = () => {
    return (
      <header className="sticky absolute dark:bg-black bg-white inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/." className="-m-1.5 p-1.5 flex flex-row gap-2">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/naizablacklogo.png"
                className="h-6 w-auto"
              />
              <img
                alt=""
                src="/Line.png"
                className="h-6 w-auto"
              />
               <img
                alt=""
                src="/nml.png"
                className="h-6 w-auto"
              />
            </a>
          </div>
          <div className="hidden text-black lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={`${unbounded_semibold.className} antialiased hover:text-yellow-400 dark:text-yellow-400 dark:hover:text-gray-500 text-base font-bold leading-6`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:gap-6 lg:justify-end">
          <ThemeToggle />
            <button className={`${unbounded.className} inline-flex items-center rounded-xl bg-while px-2 py-2 text-sm font-medium text-black ring-1 ring-inset dark:ring-black ring-white hover:ring-black dark:text-white dark:hover:ring-yellow-400 dark:hover:text-yellow-400`}>
              Login 
            </button>
            <a href='#' className={`${unbounded.className} antialiased inline-flex items-center rounded-xl bg-black px-3 py-1 hover:text-black hover:bg-yellow-400 text-sm font-medium text-white ring-5 ring-inset ring-gray-500`}>
              Sign in &gt;
            </a>
          </div>
        </nav>
      </header>  
    );
};
