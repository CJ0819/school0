import { useState } from 'react'

const info = [
    { icon: '📍', title: 'Address', lines: ['14 School Lane', 'Accra, Greater Accra', 'Ghana'] },
    { icon: '📞', title: 'Phone', lines: ['+233 20 000 0000', '+233 30 000 0000'] },
    { icon: '✉️', title: 'Email', lines: ['info@greenfield.edu.gh', 'admissions@greenfield.edu.gh'] },
    { icon: '🕐', title: 'Office Hours', lines: ['Monday – Friday', '7:00 AM – 4:30 PM'] },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
    const submit = e => { e.preventDefault(); setSubmitted(true) }

    return (
        <main className="pt-16">

            {/* Header */}
            <section className="bg-[#0D7377] py-24 px-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="max-w-4xl mx-auto relative">
                    <span className="inline-block bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                        Contact Us
                    </span>
                    <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Get in Touch<br />
                        <span className="text-[#FF6B35]">With Us</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                        Questions about admissions, school life, or anything else?
                        Our team is always happy to help.
                    </p>
                </div>
            </section>

            {/* Info Cards */}
            <section className="px-6 bg-[#0D7377]">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 pb-0 -mb-8 relative z-10">
                    {info.map((c, i) => (
                        <div key={c.title}
                            className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                                style={{ background: i === 0 ? 'rgba(13,115,119,0.08)' : i === 1 ? 'rgba(255,107,53,0.08)' : i === 2 ? 'rgba(13,115,119,0.08)' : 'rgba(255,107,53,0.08)' }}
                            >
                                {c.icon}
                            </div>
                            <p className="font-heading font-black text-gray-900 text-sm mb-2">{c.title}</p>
                            {c.lines.map(l => (
                                <p key={l} className="text-gray-500 text-xs leading-relaxed">{l}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Form + Map */}
            <section className="pt-16 pb-20 px-6 bg-[#F4F7F8]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <div className="w-10 h-1 bg-[#0D7377] rounded mb-5" />
                        <h2 className="font-heading font-black text-2xl text-gray-900 mb-2">Send Us a Message</h2>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Fill out the form and a member of our team will respond within one business day.
                        </p>

                        {submitted ? (
                            <div className="bg-[#0D7377]/5 border border-[#0D7377]/20 rounded-xl p-8 text-center">
                                <div className="text-4xl mb-3">✅</div>
                                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Message Sent!</h3>
                                <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you shortly.</p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                                    className="mt-5 text-[#0D7377] text-sm font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                            Full Name
                                        </label>
                                        <input
                                            type="text" name="name" value={form.name} onChange={handle} required
                                            placeholder="John Mensah"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 bg-[#F4F7F8] placeholder-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                            Email Address
                                        </label>
                                        <input
                                            type="email" name="email" value={form.email} onChange={handle} required
                                            placeholder="john@email.com"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 bg-[#F4F7F8] placeholder-gray-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                        Subject
                                    </label>
                                    <select
                                        name="subject" value={form.subject} onChange={handle} required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 bg-[#F4F7F8] text-gray-500"
                                    >
                                        <option value="">Select a subject</option>
                                        <option>Admissions Enquiry</option>
                                        <option>Academic Information</option>
                                        <option>Fees & Finance</option>
                                        <option>School Events</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message" value={form.message} onChange={handle} required rows={5}
                                        placeholder="Write your message here..."
                                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 bg-[#F4F7F8] resize-none placeholder-gray-300"
                                    />
                                </div>

                                <button type="submit"
                                    className="w-full bg-[#0D7377] text-white py-3.5 rounded-lg text-sm font-bold hover:bg-[#085256] transition-colors tracking-wide">
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Map + Social */}
                    <div className="flex flex-col gap-5">
                        {/* Google Map */}
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-1 min-h-72">
                            <iframe
                                title="Greenfield JHS Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.34681645987!2d-0.2699883!3d5.6036988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '280px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Quick contact strip */}
                        <div className="bg-[#0D7377] rounded-2xl p-6 flex flex-col gap-4">
                            <p className="font-heading font-black text-white text-lg">Reach Us Directly</p>
                            <div className="flex flex-col gap-3">
                                <a href="tel:+233200000000"
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3">
                                    <span className="text-lg">📞</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">+233 20 000 0000</p>
                                        <p className="text-white/50 text-xs">Call us anytime during office hours</p>
                                    </div>
                                </a>
                                <a href="mailto:info@greenfieldjhs.edu.gh"
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3">
                                    <span className="text-lg">✉️</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">info@greenfieldjhs.edu.gh</p>
                                        <p className="text-white/50 text-xs">We reply within one business day</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/233200000000" target="_blank" rel="noreferrer"
                                    className="flex items-center gap-3 bg-[#FF6B35]/80 hover:bg-[#FF6B35] transition-colors rounded-xl px-4 py-3">
                                    <span className="text-lg">💬</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">WhatsApp Us</p>
                                        <p className="text-white/70 text-xs">Quick replies on WhatsApp</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}