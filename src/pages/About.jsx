import kofi from '../assets/kofi.jpg'
import akosua from '../assets/akosua.jpg'
import yaw from '../assets/yaw.jpg'
import adwoa from '../assets/adwoa.jpg'

const values = [
    { icon: '🏆', title: 'Excellence', desc: 'We hold every student to high standards and celebrate every achievement along the way.' },
    { icon: '🤝', title: 'Respect', desc: 'A culture of mutual respect between students, staff, and parents.' },
    { icon: '💡', title: 'Curiosity', desc: 'We encourage questions, experiments, and original thinking in every lesson.' },
    { icon: '🌍', title: 'Community', desc: 'We are more than a school — we are a family that looks out for one another.' },
]

const team = [
    { name: 'Mr. Kofi Agyemang', role: 'Headmaster', img: kofi },
    { name: 'Mrs. Akosua Boateng', role: 'Assistant Headmistress', img: akosua },
    { name: 'Mr. Yaw Mensah', role: 'Head of Academics', img: yaw },
    { name: 'Ms. Adwoa Tetteh', role: 'Head of Pastoral Care', img: adwoa },
]

export default function About() {
    return (
        <main className="pt-16">
            {/* Header */}
            <section className="bg-[#0D7377] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">About Us</span>
                    <h1 className="font-heading font-black text-5xl text-white mb-5 leading-tight">
                        About Greenfield JHS
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                        For over 25 years, Greenfield School has been building confident, capable,
                        and well-rounded students ready for the challenges of life.
                    </p>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-[#F4F7F8] rounded-xl p-8 border border-gray-100">
                        <div className="w-10 h-1 bg-[#0D7377] rounded mb-5" />
                        <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">Our Mission</h2>
                        <p className="text-gray-500 leading-relaxed">
                            To provide high-quality education that equips every student with
                            the academic foundation, life skills, and character to succeed in life, career, and community.
                        </p>
                    </div>
                    <div className="bg-[#0D7377] rounded-xl p-8">
                        <div className="w-10 h-1 bg-[#FF6B35] rounded mb-5" />
                        <h2 className="font-heading font-bold text-2xl text-white mb-3">Our Vision</h2>
                        <p className="text-white/70 leading-relaxed">
                            To be the most sought-after school in Ghana — known for academic excellence,
                            character development, and producing leaders who make a positive difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-6 bg-[#F4F7F8]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-10 text-center">Our Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-5">
                        {values.map(v => (
                            <div key={v.title}
                                className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-[#0D7377]/30 transition-colors">
                                <div className="text-3xl mb-3">{v.icon}</div>
                                <h3 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-6 ">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-10 text-center">Meet the Leadership</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {team.map(m => (
                            <div key={m.name} className="text-center bg-[#F4F7F8] rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="font-heading font-bold text-gray-900">{m.name}</p>
                                <p className="text-[#0D7377] text-sm font-medium mt-1">{m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
