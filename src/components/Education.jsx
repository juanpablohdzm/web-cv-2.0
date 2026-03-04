import useScrollReveal from "../hooks/useScrollReveal";

export default function Education() {
    const titleRef = useScrollReveal();
    const degreeRef = useScrollReveal();
    const achieveRef = useScrollReveal();

    return (
        <section id="education" className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// education"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Education</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Degree */}
                    <div ref={degreeRef} className="reveal">
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-xs text-slate-500">2013 – 2018</span>
                            </div>
                            <h3 className="text-slate-100 font-semibold text-lg mb-1">
                                B.Sc. in Software Engineering
                            </h3>
                            <p className="text-sky-400 text-sm font-medium mb-3">Universidad Panamericana</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="font-mono text-xs bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                                    GPA 10/10
                                </span>
                                <span className="font-mono text-xs bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                                    Summa Cum Laude ×2
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div ref={achieveRef} className="reveal" style={{ transitionDelay: "100ms" }}>
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-5">
                            {/* CPA Cert */}
                            <div>
                                <p className="font-mono text-xs text-slate-500 mb-2">Certification</p>
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-slate-100 text-sm font-medium">
                                            C++ Certified Associate Programmer
                                        </p>
                                        <p className="font-mono text-xs text-slate-500 mt-0.5">OpenEDG · C++ Institute</p>
                                    </div>
                                    <a
                                        href="https://verify.openedg.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 font-mono text-xs border border-amber-400/40 text-amber-400 px-3 py-1.5 rounded hover:bg-amber-400/10 transition-colors"
                                    >
                                        Verify →
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-slate-800" />

                            {/* Published paper */}
                            <div>
                                <p className="font-mono text-xs text-slate-500 mb-2">Published Research · 2018</p>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    "Thoughts and Emotion Assimilation and Detonation through VR for People With ASD"
                                </p>
                                <p className="font-mono text-xs text-slate-500 mt-1">
                                    Co-authored at Universidad Panamericana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
