import useTypewriter from "../hooks/useTypewriter";

const ROLES = [
    "C++ Systems Engineer",
    "Real-time Systems Architect",
    "Low-Level C++ Developer",
    "Unreal Engine Specialist",
];

const STATS = [
    { value: "7+", label: "years experience" },
    { value: "4", label: "languages spoken" },
    { value: "8", label: "roles held" },
    { value: "10/10", label: "Summa Cum Laude" },
];

export default function Hero() {
    const role = useTypewriter(ROLES);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
        >
            {/* Background grid + radial gradient */}
            <div className="absolute inset-0 bg-grid opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />

            <div className="relative max-w-6xl mx-auto px-6 py-28 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left column */}
                <div className="flex flex-col gap-6">
                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                            Open to senior / staff-level roles
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight tracking-tight">
                        Juan Pablo<br />Hernandez Mosti
                    </h1>

                    {/* Typewriter role */}
                    <h2 className="font-mono text-lg md:text-xl text-sky-400 min-h-[1.75rem]">
                        Senior{" "}
                        <span>{role}</span>
                        <span className="animate-blink text-sky-400">|</span>
                    </h2>

                    {/* Summary */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
                        7+ years building performance-critical software in C++17/20 — from real-time 3D engines and VR/AR
                        pipelines to blockchain backends. Obsessed with RAII, deterministic resource management, and
                        systems that behave predictably under pressure.
                    </p>

                    {/* Location */}
                    <p className="font-mono text-xs text-slate-500">
                        📍 Europe &nbsp;•&nbsp; Remote
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <a
                            href={`${process.env.PUBLIC_URL}/JuanPHernandez-CV.pdf`}
                            download="JuanPHernandez-CV.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-400 text-slate-950 text-sm font-semibold rounded hover:bg-sky-300 transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 text-slate-300 text-sm font-medium rounded hover:border-sky-400 hover:text-sky-400 transition-colors"
                        >
                            Get in touch →
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-slate-800">
                        {STATS.map((s) => (
                            <div key={s.label} className="flex flex-col">
                                <span className="font-mono text-xl font-semibold text-slate-100">{s.value}</span>
                                <span className="font-mono text-xs text-slate-500">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — code block (desktop only) */}
                <div className="hidden md:block">
                    <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-sky-400/5">
                        {/* Editor title bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            <span className="ml-3 font-mono text-xs text-slate-500">owner_ptr.cpp</span>
                        </div>
                        {/* Code */}
                        <div className="bg-slate-900 p-5 overflow-x-auto">
                            <pre className="font-mono text-xs leading-relaxed">
<span className="text-slate-500">{"// RAII smart pointer — no shared ownership"}</span>{"\n"}
<span className="text-violet-400">template</span>
<span className="text-slate-200">&lt;</span>
<span className="text-violet-400">typename</span>
<span className="text-sky-400"> T</span>
<span className="text-slate-200">&gt;{"\n"}</span>
<span className="text-violet-400">class </span>
<span className="text-amber-400">OwnerPtr </span>
<span className="text-slate-200">{"{"}{"\n"}</span>
<span className="text-slate-200">{"public:"}{"\n"}</span>
<span className="text-slate-200">{"    "}</span>
<span className="text-violet-400">explicit </span>
<span className="text-sky-400">OwnerPtr</span>
<span className="text-slate-200">(T* ptr = </span>
<span className="text-violet-400">nullptr</span>
<span className="text-slate-200">) : _ptr(ptr) {"{}"}{"\n"}</span>
{"\n"}
<span className="text-slate-500">{"    // Non-copyable"}</span>{"\n"}
<span className="text-slate-200">{"    "}OwnerPtr(</span>
<span className="text-violet-400">const </span>
<span className="text-amber-400">OwnerPtr</span>
<span className="text-slate-200">&) = </span>
<span className="text-violet-400">delete</span>
<span className="text-slate-200">;{"\n"}</span>
<span className="text-slate-200">{"    "}OwnerPtr& </span>
<span className="text-violet-400">operator</span>
<span className="text-slate-200">=(</span>
<span className="text-violet-400">const </span>
<span className="text-amber-400">OwnerPtr</span>
<span className="text-slate-200">&) = </span>
<span className="text-violet-400">delete</span>
<span className="text-slate-200">;{"\n"}</span>
{"\n"}
<span className="text-slate-500">{"    // Move semantics"}</span>{"\n"}
<span className="text-slate-200">{"    "}OwnerPtr(</span>
<span className="text-amber-400">OwnerPtr</span>
<span className="text-slate-200">&& other) </span>
<span className="text-violet-400">noexcept</span>
<span className="text-slate-200">{"\n"}{"        "}: _ptr(other._ptr) {"{"} other._ptr = </span>
<span className="text-violet-400">nullptr</span>
<span className="text-slate-200">; {"}"}{"\n"}</span>
{"\n"}
<span className="text-slate-200">{"    "}~OwnerPtr() {"{"} </span>
<span className="text-violet-400">delete </span>
<span className="text-slate-200">_ptr; {"}"}{"\n"}</span>
{"\n"}
<span className="text-slate-200">{"    "}T* </span>
<span className="text-sky-400">get</span>
<span className="text-slate-200">() </span>
<span className="text-violet-400">const noexcept </span>
<span className="text-slate-200">{"{"} </span>
<span className="text-violet-400">return </span>
<span className="text-slate-200">_ptr; {"}"}{"\n"}</span>
{"\n"}
<span className="text-slate-500">{"private:"}{"\n"}</span>
<span className="text-slate-200">{"    "}T* _ptr;</span>{"\n"}
<span className="text-slate-200">{"};"}</span>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll arrow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    );
}
