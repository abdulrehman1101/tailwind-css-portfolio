'use client';
import Link from 'next/link';
import React, {useState} from 'react'
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLink = [
    {
    title: "About",
    path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

 
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className=" bg-gray-700 bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 ">
            <Link href={"/"} className="text-2x1 md:text-5xl text-white font-semibold">
              PORTFOLIO
            </Link>

              <div className="mobile-menu block md:hidden">
                   {!
                    navbarOpen ? (
                      <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" >
                        <Bars3Icon className="h-5 w-5" />
                      </button>
                    ) : (
                      <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    )
                   }
              </div>

            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4  md:flex-row md:space-x-8 mt-0">
                   {
                    navLink.map((link, index) => (
                      <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                      </li>
                    ))
                   }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLink} /> : null}
    </nav>
  )
};

export default Navbar;