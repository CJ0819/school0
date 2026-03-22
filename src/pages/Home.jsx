import { Link } from 'react-router-dom'

const stats = [
    { value: '95%', label: 'BECE Pass Rate' },
    { value: '800+', label: 'Students' },
    { value: '40+', label: 'Clubs & Sports' },
    { value: '25yrs', label: 'Established' },
]

const features = [
    { icon: '🎓', title: 'BECE Preparation', desc: 'Structured revision, mock exams, and expert coaching to help every student excel.' },
    { icon: '🔬', title: 'Science Labs', desc: 'Fully equipped biology, chemistry, and physics labs for hands-on learning.' },
    { icon: '💻', title: 'ICT & Computing', desc: 'Modern computer lab with internet access and a dedicated tech curriculum.' },
    { icon: '⚽', title: 'Sports & Games', desc: 'Football, basketball, volleyball, athletics and more — something for everyone.' },
    { icon: '🎭', title: 'Arts & Culture', desc: 'Drama club, music, cultural dance, and our popular annual speech and prize-giving day.' },
    { icon: '📚', title: 'School Library', desc: 'A well-stocked library open daily with resources for research and leisure reading.' },
]

const news = [
    { date: 'Mar 10, 2025', tag: 'Results', title: 'JHS 3 Records Best BECE Results in School History', desc: '92% of students achieved aggregate scores of 6–18 in the 2024 BECE examinations.' },
    { date: 'Feb 28, 2025', tag: 'Sports', title: 'Greenfield Wins Inter-School Football Trophy', desc: 'Our U-15 boys team defeated five schools to lift the Greater Accra championship.' },
    { date: 'Feb 14, 2025', tag: 'Events', title: 'Science & Technology Fair 2025 Announced', desc: 'Students in all three year groups will showcase projects in our biggest fair yet.' },
]

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="min-h-screen flex items-center bg-[#0D7377] pt-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full py-20">
                    <div>
                        <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                            Welcome
                        </span>
                        <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight mb-6">
                            Learn. Grow.<br />
                            <span className="text-[#FF6B35]">Excel.</span>
                        </h1>
                        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-md">
                            Greenfield School — where students are equipped with
                            the knowledge, skills, and confidence to thrive in senior high and beyond.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/admissions"
                                className="bg-[#FF6B35] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#FF8C5A] transition-colors">
                                Apply Now →
                            </Link>
                            <Link to="/academics"
                                className="bg-white/15 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/25 transition-colors">
                                Our Programmes
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map(s => (
                            <div key={s.label} className="bg-white rounded-xl p-6 text-center">
                                <p className="font-heading font-black text-4xl text-[#0D7377] mb-1">{s.value}</p>
                                <p className="text-gray-500 text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-6 bg-[#F4F7F8]">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block bg-[#0D7377]/10 text-[#0D7377] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                                Why Choose Us
                            </span>
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight">
                                Everything a <br />Student Needs
                            </h2>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-5">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="group relative rounded-2xl p-7 border bg-white border-gray-100 hover:border-[#0D7377]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
                            >
                                {/* Number badge */}
                                <span className="absolute top-5 right-5 text-xs font-black font-heading text-gray-100">
                                    0{features.indexOf(f) + 1}
                                </span>

                                {/* Top accent bar */}
                                <div className="w-10 h-1 rounded-full mb-6 bg-[#0D7377]" />

                                {/* Icon circle */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors"
                                    style={{ background: 'rgba(13,115,119,0.08)' }}
                                >
                                    {f.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-heading font-black text-xl mb-3 leading-snug text-gray-900 group-hover:text-[#0D7377] transition-colors">
                                    {f.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {f.desc}
                                </p>

                                {/* Arrow link */}
                                <div className="mt-6 flex items-center gap-1 text-xs font-bold tracking-wide uppercase text-[#0D7377] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <span className="text-base leading-none">→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* News */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="font-heading font-black text-3xl text-gray-900">Latest News</h2>
                        <Link to="/contact" className="text-[#0D7377] text-sm font-semibold hover:underline">View all →</Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {news.map(n => (
                            <div key={n.title} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-2 bg-[#0D7377]" />
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-[#FF6B35]/10 text-[#cc4a1a] text-xs font-semibold px-2.5 py-1 rounded-full">{n.tag}</span>
                                        <span className="text-gray-400 text-xs">{n.date}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-gray-900 mb-2 leading-tight">{n.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 px-6 bg-[#F4F7F8]">
                <div className="max-w-4xl mx-auto bg-[#0D7377] rounded-2xl p-12 text-center">
                    <h2 className="font-heading font-black text-4xl text-white mb-4">Ready to Join Greenfield?</h2>
                    <p className="text-white/70 mb-8 text-lg">Get to know application dates. Secure your child's place today.</p>
                    <Link to="/admissions"
                        className="inline-block bg-white text-[#0D7377] font-bold px-10 py-4 rounded-lg hover:bg-[#E8EDEF] transition-colors">
                        Start Application
                    </Link>
                </div>
            </section>
        </main>
    )
}