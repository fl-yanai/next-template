'use client';
import { APPURLS } from '@/contexts/appUrls';
import { PAGENAME } from '@/contexts/pageName';
import Link from 'next/link';
import { FC, useState } from 'react';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ pageName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { label: PAGENAME.top, link: APPURLS.top },
    { label: PAGENAME.about, link: APPURLS.about },
  ];
  return (
    <>
      <nav
        className={`absolute transition-all duration-300 bg-slate-900 min-h-screen w-8/12 md:w-1/6 ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="pt-16 pb-8 px-3 w-full text-white [&_li:not(:first-child)]:mt-3 [&_li]:rounded-md [&_a]:px-4 [&_a]:py-3 [&_a]:w-full [&_a]:h-full [&_a]:block">
          {navs.map((nav, index) => {
            return (
              <li
                key={index}
                className={`transitiona-all duration-200 hover:bg-green-500 ${
                  nav.label === pageName ? 'pointer-events-none bg-green-500' : ''
                }`}
              >
                <Link href={nav.link}>{nav.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={`w-full min-h-screen bg-[#f1f1f1]`}>
        <header className="flex items-center justify-between h-14 bg-gray-900 py-2 px-5">
          <button onClick={() => setIsOpen(!isOpen)} className="h-2/5 w-7 relative z-50">
            <span className="absolute top-0 translate-y-full block h-[2px] w-full bg-white"></span>
            <span className="absolute top-1/2 block h-[2px] w-full bg-white"></span>
            <span className="absolute bottom-0 block h-[2px] w-full bg-white"></span>
          </button>
          <p className="text-2xl font-bold text-white">{pageName}</p>
          <div className="w-7"></div>
        </header>
        <main className="p-5 pt-8">{children}</main>
      </div>
    </>
  );
};
