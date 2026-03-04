import useScrollReveal from "../hooks/useScrollReveal";

const TESTIMONIALS = [
    {
        quote: "advanced C++ concepts, templates, threading — well outside the usual Unreal sphere",
        author: "Itamar Salomão",
        title: "CTO",
        company: "AppLayer",
        file: `${process.env.PUBLIC_URL}/recommendations/AppLayer.pdf`,
        filename: "AppLayer_recommendation.pdf",
    },
    {
        quote: "dependable, collaborative, and a pleasure to work with",
        author: "Solaris & Cam",
        title: "Leadership",
        company: "CheerioWorld / 3DIQ",
        file: `${process.env.PUBLIC_URL}/recommendations/Cheerio.pdf`,
        filename: "Cheerio_recommendation.pdf",
    },
    {
        quote: "exceptionally reliable and demonstrated resilience even in high-pressure situations",
        author: "Tomasz & Loïc",
        title: "Team Leads",
        company: "Realworld-one",
        file: `${process.env.PUBLIC_URL}/recommendations/RW1.pdf`,
        filename: "RW1_recommendation.pdf",
    },
    {
        quote: "dependable, collaborative, a pleasure to work with",
        author: "Gil Hinojosa",
        title: "Director",
        company: "RuckusDev",
        file: `${process.env.PUBLIC_URL}/recommendations/ruckusDev.pdf`,
        filename: "ruckusDev_recommendation.pdf",
    },
];

function TestimonialCard({ item, delay }) {
    const ref = useScrollReveal();

    return (
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
                    <a
                        href={item.file}
                        download={item.filename}
                        className="shrink-0 font-mono text-xs border border-slate-700 text-slate-400 px-3 py-1.5 rounded hover:border-sky-400/50 hover:text-sky-400 transition-colors"
                    >
                        Download letter →
                    </a>
                </div>
            </div>
        </div>
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
