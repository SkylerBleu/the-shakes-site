'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react' // hamburger and close icons

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/merch', label: 'Merch' },
        { href: '/music', label: 'Music' },
        { href: '/shows', label: 'Shows' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.5)] text-white px-6 py-4 shadow-md z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <img
                        src="/logo/logo-static-white.gif"
                        alt="The Shakes"
                        className="h-10 w-auto sm:h-14 md:h-20 lg:h-24"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6 text-sm sm:text-base">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`pb-1 border-b-2 transition-colors hover:text-gray-400 ${pathname === href ? 'border-white' : 'border-transparent'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4 px-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={`pb-1 border-b transition-colors hover:text-gray-400 ${pathname === href ? 'border-white' : 'border-transparent'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
