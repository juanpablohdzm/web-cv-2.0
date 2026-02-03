import { useEffect, useRef } from "react";
import ProfilePicture from "../../profile-picture.jpg";

function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black z-10" />
                <div className="absolute inset-0 opacity-10 bg-grid" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),_transparent_55%)]" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full max-w-6xl mx-auto px-4 py-28 flex flex-col md:flex-row items-center gap-16">
                {/* Left: Content */}
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs md:text-sm text-sky-200 mb-6">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Open to senior / staff-level roles in real-time, engine,
                        and backend systems.
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4">
                        Senior Software Engineer
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mb-8">
                        7+ years designing and delivering low-level,
                        performance‑critical systems across real-time,
                        distributed, and cloud‑integrated environments. I bridge
                        engine internals, automation workflows, and
                        decentralized backends with clean, reliable
                        architecture.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <a
                            href="/JuanPHernandez-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-full bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-400/40 hover:shadow-sky-400/60 hover:bg-sky-300 transition-transform transform hover:-translate-y-0.5"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-transform transform hover:-translate-y-0.5"
                        >
                            Get in touch
                        </a>
                        <span className="text-sm text-slate-300/80">
                            Currently based in Europe • Open to remote
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                        <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                            <p className="text-xs text-slate-300">Core Focus</p>
                            <p className="font-medium text-white">
                                Real‑time & engine systems
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                            <p className="text-xs text-slate-300">
                                Specialization
                            </p>
                            <p className="font-medium text-white">
                                Blockchain‑backed backends
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                            <p className="text-xs text-slate-300">Experience</p>
                            <p className="font-medium text-white">
                                VR / AR & 3D pipelines
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                            <p className="text-xs text-slate-300">Approach</p>
                            <p className="font-medium text-white">
                                Deterministic, observable systems
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Photo / Badge */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-sky-400/50 via-emerald-400/40 to-indigo-400/40 blur-2xl opacity-60" />
                        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-1">
                            <div className="rounded-[1.6rem] bg-slate-950/80 p-6 flex flex-col items-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 mb-6">
                                    <img
                                        src={ProfilePicture}
                                        alt="Juan Pablo Hernandez Mosti"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-1 text-center">
                                    Juan Pablo Hernandez Mosti
                                </h2>
                                <p className="text-sm text-slate-300 mb-4 text-center">
                                    Senior Software Engineer • Real‑time systems
                                    & engines
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 text-[11px] text-slate-200">
                                    <span className="px-3 py-1 rounded-full bg-sky-400/15 border border-sky-400/40">
                                        C++ / C# / Solidity
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/40">
                                        Unreal / Unity
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-indigo-400/10 border border-indigo-400/40">
                                        VR / AR
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-fuchsia-400/10 border border-fuchsia-400/40">
                                        Blockchain
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
}

export default Hero;
