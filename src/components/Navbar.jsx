import React from 'react'
import { navLinks } from '../data/data'
import { MenuIcon } from 'lucide-react'
const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 z-20 px-auto w-full transition-all duration-300 bg-transparent">
            <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
                <a href="/">
                 <img src="/assets/logo.svg" alt="logo" />
                </a>

                {/* nav link */}

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href} className="hover:text-zinc-600">
                            {link.name}
                        </a>
                    ))} 
                </div>

                 <a href="#book" className="hidden md:flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-black rounded-full hover:bg-zinc-800">
                   Book a table
                </a>

                <button className="md:hidden">
                    <MenuIcon />
                </button>


            </div>
        </nav>
    </>
  )
}

export default Navbar
