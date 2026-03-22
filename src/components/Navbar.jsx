import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Greenfield from '../assets/Greenfield.png'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/contact', label: 'Contact' },
    { to: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0D7377] flex items-center justify-center">
                        <img src={Greenfield} alt="Logo" />
                    </div>
                    <div>
                        <p className="font-heading font-bold text-base text-gray-900 leading-none">Greenfield</p>
                        <p className="text-gray-400 text-[10px]">School</p>
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-7 text-sm text-gray-500 font-medium">
                    {links.map(l => (
                        <li key={l.to}>
                            <Link to={l.to}
                                className={`hover:text-[#0D7377] transition-colors ${pathname === l.to ? 'text-[#0D7377] font-semibold' : ''}`}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to="/admissions"
                    className="hidden md:inline-block bg-[#FF6B35] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#FF8C5A] transition-colors">
                    Apply Now
                </Link>

                <button className="md:hidden text-gray-700 text-2xl" onClick={() => setOpen(!open)}>
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-600">
                    {links.map(l => (
                        <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                            className={pathname === l.to ? 'text-[#0D7377] font-semibold' : ''}>
                            {l.label}
                        </Link>
                    ))}
                    <Link to="/admissions" className="bg-[#FF6B35] text-white text-center py-2.5 rounded-lg font-semibold">
                        Apply Now
                    </Link>
                </div>
            )}
        </nav>
    )
}