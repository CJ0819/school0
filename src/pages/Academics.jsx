const subjects = [
    { name: 'English Language', icon: '📝', desc: 'Reading, writing, comprehension, and oral communication for BECE and beyond.' },
    { name: 'Mathematics', icon: '📐', desc: 'From algebra to geometry — building strong quantitative reasoning skills.' },
    { name: 'Integrated Science', icon: '🔬', desc: 'Biology, chemistry, and physics blended with practical lab sessions.' },
    { name: 'Social Studies', icon: '🗺️', desc: 'History, geography, civics, and current affairs to build informed citizens.' },
    { name: 'ICT', icon: '💻', desc: 'Computing basics, Microsoft Office, internet research, and digital literacy.' },
    { name: 'French', icon: '🇫🇷', desc: 'Beginner to intermediate French to open global doors for students.' },
    { name: 'R.M.E', icon: '🕊️', desc: 'Religious and Moral Education building character and ethical thinking.' },
    { name: 'BDT / Voc. Skills', icon: '🔧', desc: 'Basic Design and Technology for practical, real-world problem solving.' },
]

const levels = [
    { level: 'Preschool', desc: 'Students settle into preschool with strong foundations in all core subjects. Focus on study habits and classroom confidence.' },
    { level: 'Primary', desc: 'Deeper exploration of concepts, introduction to project work and group assignments. BECE preparation begins.' },
    { level: 'JHS', desc: 'Intensive BECE preparation — mock exams, past papers, small group coaching sessions, and exam strategy workshops.' },
]

export default function Academics() {
    return (
        <main className="pt-16">
            <section className="bg-[#0D7377] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">Curriculum</span>
                    <h1 className="font-heading font-black text-5xl text-white mb-5">Our Academic Programme</h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                        Our curriculum follows the Ghana Education Service standards, enriched with extra support,
                        resources, and activities to help every student exceed expectations.
                    </p>
                </div>
            </section>

            {/* Levels */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-10 text-center">Achieving Academic Excellence</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {levels.map((l, i) => (
                            <div key={l.level} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-[#0D7377] p-6">
                                    <span className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block"></span>
                                    <h3 className="font-heading font-black text-2xl text-white">{l.level}</h3>
                                </div>
                                <div className="p-6 bg-white">
                                    <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects */}
            <section className="py-16 px-6 bg-[#F4F7F8]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-10 text-center">Subjects We Teach</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {subjects.map(s => (
                            <div key={s.name}
                                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#0D7377]/30 hover:shadow-sm transition-all">
                                <div className="text-2xl mb-3">{s.icon}</div>
                                <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">{s.name}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BECE Banner */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-2xl p-10 text-center">
                    <div className="text-4xl mb-4">🏆</div>
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-3">BECE Excellence Track</h2>
                    <p className="text-gray-500 mb-6 max-w-xl mx-auto leading-relaxed">
                        Our dedicated JHS 3 BECE coaching programme includes weekly mock tests, past-paper sessions,
                        subject clinics, and one-on-one tutoring — giving every student the best possible start.
                    </p>
                    <span className="inline-block bg-[#FF6B35] text-white font-bold px-6 py-3 rounded-lg text-sm">
                        95% Pass Rate in 2024
                    </span>
                </div>
            </section>
        </main>
    )
}