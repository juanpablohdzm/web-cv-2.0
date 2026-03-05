import { useState, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const TESTIMONIALS = [
    {
        quote: "advanced C++ concepts, templates, threading — well outside the usual Unreal sphere",
        author: "Itamar Salomão",
        title: "CTO",
        company: "AppLayer",
        file: `${process.env.PUBLIC_URL}/recommendations/AppLayer.pdf`,
    },
    {
        quote: "dependable, collaborative, and a pleasure to work with",
        author: "Solaris & Cam",
        title: "Leadership",
        company: "CheerioWorld / 3DIQ",
        file: `${process.env.PUBLIC_URL}/recommendations/Cheerio.pdf`,
    },
    {
        quote: "exceptionally reliable and demonstrated resilience even in high-pressure situations",
        author: "Tomasz & Loïc",
        title: "Team Leads",
        company: "Realworld-one",
        file: `${process.env.PUBLIC_URL}/recommendations/RW1.pdf`,
    },
    {
        quote: "very experienced with Unreal Engine development and enjoys learning new languages and tools",
        author: "Gil Hinojosa",
        title: "Co-Development Manager",
        company: "RuckusDev",
        file: `${process.env.PUBLIC_URL}/recommendations/ruckusDev.pdf`,
    },
];

function PdfModal({ file, onClose }) {
    const [visible, setVisible] = useState(false);

    // Trigger enter animation on next paint
    useEffect(() => {
        const raf = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    const handleClose = useCallback(() => {
        setVisible(false);
        setTimeout(onClose, 320);
    }, [onClose]);

    return (
        <div
            onClick={handleClose}
            style={{
                transition: "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: visible ? 1 : 0,
            }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    transition: "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.88)",
                }}
                className="relative bg-slate-900 rounded-xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                    <p className="font-mono text-xs text-slate-400">Recommendation Letter</p>
                    <button
                        onClick={handleClose}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                        aria-label="Close"
                    >
                        <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <iframe
                    src={file}
                    title="Recommendation Letter"
                    className="flex-1 w-full"
                />
            </div>
        </div>
    );
}

function TestimonialCard({ item, delay }) {
    const ref = useScrollReveal();
    const [showPdf, setShowPdf] = useState(false);

    return (
        <>
            <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
                <div className="h-full p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col">
                    <span className="text-4xl font-serif text-sky-400/30 leading-none mb-3">"</span>
                    <p className="text-slate-300 text-sm leading-relaxed italic flex-1">
                        "{item.quote}"
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-3">
                        <div>
                            <p className="text-slate-100 font-medium text-sm">{item.author}</p>
                            <p className="font-mono text-xs text-slate-500">{item.title} · {item.company}</p>
                        </div>
                        <button
                            onClick={() => setShowPdf(true)}
                            className="shrink-0 font-mono text-xs border border-slate-700 text-slate-400 px-3 py-1.5 rounded hover:border-sky-400/50 hover:text-sky-400 transition-colors"
                        >
                            View letter →
                        </button>
                    </div>
                </div>
            </div>

            {showPdf && <PdfModal file={item.file} onClose={() => setShowPdf(false)} />}
        </>
    );
}

export default function Testimonials() {
    const titleRef = useScrollReveal();

    return (
        <section id="testimonials" className="py-24 bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// what_they_say"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Recommendations</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {TESTIMONIALS.map((item, i) => (
                        <TestimonialCard key={item.company} item={item} delay={i * 80} />
                    ))}
                </div>
            </div>
        </section>
    );
}
