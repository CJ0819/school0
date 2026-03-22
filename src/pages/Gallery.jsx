import { useState } from 'react'

const images = [
    // Sports & Games
    { id: 1, category: 'Sports & Games', src: 'https://i.pinimg.com/1200x/bb/9f/02/bb9f024ab03904cd730e8bcebdc55353.jpg', caption: 'Inter-school football tournament' },
    { id: 2, category: 'Sports & Games', src: 'https://i.pinimg.com/736x/ae/74/4a/ae744a22b57b8cadb6bb1fd854585376.jpg', caption: 'Athletics day on the track' },
    { id: 3, category: 'Sports & Games', src: 'https://i.pinimg.com/1200x/4b/79/d6/4b79d64a2c7f680eab3b32754613110f.jpg', caption: 'Basketball finals 2024' },
    { id: 4, category: 'Sports & Games', src: 'https://i.pinimg.com/1200x/87/99/32/879932285b78067000564aa103aa9faa.jpg', caption: 'Volleyball championship match' },

    // Classrooms & Labs
    { id: 5, category: 'Classrooms & Labs', src: 'https://i.pinimg.com/736x/4e/aa/62/4eaa622fc8424d8f41e8004ac34083fa.jpg', caption: 'Science lab practical session' },
    { id: 6, category: 'Classrooms & Labs', src: 'https://i.pinimg.com/1200x/2a/36/df/2a36df544d5c53c106e86e4e3686ce9f.jpg', caption: 'ICT lab — coding class' },
    { id: 7, category: 'Classrooms & Labs', src: 'https://i.pinimg.com/736x/14/21/34/14213430fc4a48519f04837d38b0a1ca.jpg', caption: 'Students during maths lesson' },
    { id: 8, category: 'Classrooms & Labs', src: 'https://i.pinimg.com/736x/01/ad/fd/01adfd25cb792acefa75a56e6bb1f366.jpg', caption: 'Chemistry experiment' },

    // Events & Ceremonies
    { id: 9, category: 'Events & Ceremonies', src: 'https://i.pinimg.com/736x/0b/6f/e2/0b6fe2801b948e47d7a9913bbd1676f2.jpg', caption: 'Speech and prize-giving day 2024' },
    { id: 10, category: 'Events & Ceremonies', src: 'https://i.pinimg.com/1200x/27/7f/83/277f83d6ed77da6040e4eb837bcd22bb.jpg', caption: 'Independence Day celebration' },
    { id: 11, category: 'Events & Ceremonies', src: 'https://i.pinimg.com/736x/50/4c/06/504c06f7367cae3e388178851b9407ea.jpg', caption: 'Science & Technology Fair' },
    { id: 12, category: 'Events & Ceremonies', src: 'https://i.pinimg.com/control1/1200x/df/ab/86/dfab8646a52a87f695e01a177235156d.jpg', caption: 'JHS 3 graduation ceremony' },

    // Students & Life
    { id: 13, category: 'Students & Life', src: 'https://i.pinimg.com/1200x/65/2a/75/652a75f2f15af37a7a13dc57ded22239.jpg', caption: 'Break time on the field' },
    { id: 14, category: 'Students & Life', src: 'https://i.pinimg.com/1200x/2d/53/1e/2d531ee05aa500b2066980e10621eaef.jpg', caption: 'Library reading hour' },
    { id: 15, category: 'Students & Life', src: 'https://i.pinimg.com/736x/ca/bf/74/cabf74531fa36e70ba4f9c93d73c64b7.jpg', caption: 'Drama club rehearsal' },
    { id: 16, category: 'Students & Life', src: 'https://i.pinimg.com/736x/07/72/c2/0772c219c33c8af74d8b30323863767b.jpg', caption: 'Students at the canteen' },
]

const categories = ['All', 'Sports & Games', 'Classrooms & Labs', 'Events & Ceremonies', 'Students & Life']

export default function Gallery() {
    const [active, setActive] = useState('All')
    const [lightbox, setLightbox] = useState(null)

    const filtered = active === 'All' ? images : images.filter(img => img.category === active)

    // Split into 3 columns for masonry
    const col1 = filtered.filter((_, i) => i % 3 === 0)
    const col2 = filtered.filter((_, i) => i % 3 === 1)
    const col3 = filtered.filter((_, i) => i % 3 === 2)

    const currentIndex = lightbox !== null ? filtered.findIndex(img => img.id === lightbox.id) : -1

    const goPrev = () => {
        if (currentIndex > 0) setLightbox(filtered[currentIndex - 1])
    }

    const goNext = () => {
        if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1])
    }

    return (
        <main className="pt-16">
            {/* Page Header */}
            <section className="bg-[#0D7377] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                        Our Gallery
                    </span>
                    <h1 className="font-heading font-black text-5xl text-white mb-5 leading-tight">
                        Life at Greenfield JHS
                    </h1>
                    <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                        A glimpse into the vibrant daily life, achievements, and memorable moments of our school community.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm px-6 py-4">
                <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${active === cat
                                ? 'bg-[#0D7377] text-white'
                                : 'bg-[#F4F7F8] text-gray-600 hover:bg-[#0D7377]/10 hover:text-[#0D7377]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <span className="ml-auto text-sm text-gray-400 self-center">
                        {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="py-10 px-6 bg-[#F4F7F8] min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {filtered.length === 0 ? (
                        <div className="text-center py-24 text-gray-400">
                            <div className="text-5xl mb-4">📷</div>
                            <p className="font-heading font-bold text-xl text-gray-500">No photos in this category yet</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[col1, col2, col3].map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col gap-4">
                                    {col.map(img => (
                                        <div
                                            key={img.id}
                                            className="group relative rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-lg transition-shadow"
                                            onClick={() => setLightbox(img)}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.caption}
                                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-[#0D7377]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                                                <div className="text-white text-2xl">🔍</div>
                                                <p className="text-white text-sm font-semibold text-center leading-snug">{img.caption}</p>
                                                <span className="text-white/70 text-xs bg-white/20 px-3 py-1 rounded-full">{img.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl font-light z-10"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        {currentIndex > 0 && (
                            <button
                                onClick={goPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/70 hover:text-white text-4xl font-light z-10"
                            >
                                ‹
                            </button>
                        )}

                        {/* Image */}
                        <img
                            src={lightbox.src}
                            alt={lightbox.caption}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />

                        {/* Caption */}
                        <div className="mt-4 text-center">
                            <p className="text-white font-semibold">{lightbox.caption}</p>
                            <span className="text-white/50 text-sm">{lightbox.category}</span>
                            <p className="text-white/30 text-xs mt-1">
                                {currentIndex + 1} / {filtered.length}
                            </p>
                        </div>

                        {/* Next */}
                        {currentIndex < filtered.length - 1 && (
                            <button
                                onClick={goNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/70 hover:text-white text-4xl font-light z-10"
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
            )}
        </main>
    )
}