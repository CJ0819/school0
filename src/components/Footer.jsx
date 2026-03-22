import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-14 pb-8 px-6 mt-0">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-gray-700 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#0D7377] flex items-center justify-center">
                                <span className="text-white font-heading font-black text-xs">G</span>
                            </div>
                            <p className="text-white font-heading font-bold">Greenfield JHS</p>
                        </div>
                        <p className="text-sm leading-relaxed">Preparing students for success and life beyond the classroom.</p>
                    </div>

                    {[
                        { title: 'School', links: ['Home', 'About Us', 'Academics', 'Admissions'] },
                        { title: 'Contact', links: ['14 School Lane, Accra', '+233 20 000 0000', 'info@greenfieldjhs.edu.gh'] },
                    ].map(col => (
                        <div key={col.title}>
                            <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
                            <ul className="space-y-2 text-sm">
                                {col.links.map(l => (
                                    <li key={l}>
                                        <Link to="/" className="hover:text-[#0D7377] transition-colors">{l}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} Greenfield Junior High School. All rights reserved.
                </p>
            </div>
        </footer>
    )
}