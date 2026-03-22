import { useState } from 'react'

const requirements = [
    'Minimum age of 1 year',
    ' Medical examination report (issued within the last 3 months)',
    'Primary school leaving certificate or report card',
    'Birth certificate',
    'Passport-sized photograph (2 copies)',
    'Parent/guardian national ID',
]

const steps = [
    { num: '01', title: 'Contact Admissions', desc: 'Contact admissions to purchase admission forms.' },
    { num: '02', title: 'Fill the Form', desc: 'Complete the application form below with accurate details.' },
    { num: '03', title: 'Submit Documents', desc: 'Bring the required documents to our admissions office.' },
    { num: '04', title: 'Entrance Assessment', desc: 'Sit a short English and Maths assessment (JHS 1 applicants only).' },
    { num: '05', title: 'Receive Offer', desc: 'Get your admission letter and confirm your place with school fees.' },
]

export default function Admissions() {
    const [form, setForm] = useState({ studentName: '', parentName: '', email: '', phone: '', level: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
    const submit = e => { e.preventDefault(); setSubmitted(true) }

    return (
        <main className="pt-16">
            <section className="bg-[#0D7377] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">Admissions</span>
                    <h1 className="font-heading font-black text-5xl text-white mb-5">Join Greenfield School</h1>
                    <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                        We welcome applications for Greenfield. Spaces are limited — apply early to secure a place.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-6 bg-[#F4F7F8]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading font-black text-3xl text-gray-900 mb-10 text-center">How to Apply</h2>
                    <div className="grid md:grid-cols-5 gap-6">
                        {steps.map(s => (
                            <div key={s.num} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0D7377] text-white font-heading font-black text-sm flex items-center justify-center mx-auto mb-4">
                                    {s.num}
                                </div>
                                <h3 className="font-heading font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements + Form */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Requirements</h2>
                        <ul className="space-y-3 mb-8">
                            {requirements.map(r => (
                                <li key={r} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-[#0D7377]/10 text-[#0D7377] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                                    <span className="text-gray-600 text-sm">{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </section>
        </main>
    )
}