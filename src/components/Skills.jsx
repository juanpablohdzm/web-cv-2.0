import useScrollReveal from "../hooks/useScrollReveal";

const GROUPS = [
    {
        label: "Core Languages",
        items: [
            { name: "C#", level: "proficient" },
            { name: "JavaScript / TypeScript", level: "proficient" },
            { name: "Solidity", level: "proficient" },
            { name: "Rust", level: "learning" },
        ],
    },
    {
        label: "Engines & Frameworks",
        items: [
            { name: "Unreal Engine (C++, BP, Slate)", level: "proficient" },
            { name: "Unity", level: "proficient" },
            { name: "React / React Native", level: "proficient" },
            { name: "Node.js", level: "proficient" },
            { name: "GraphQL", level: "proficient" },
        ],
    },
    {
        label: "Tools & Platforms",
        items: [
            { name: "Git", level: "proficient" },
            { name: "Perforce", level: "proficient" },
            { name: "Docker", level: "proficient" },
            { name: "Foundry", level: "proficient" },
            { name: "Photon", level: "proficient" },
            { name: "Azure", level: "proficient" },
        ],
    },
];

function RevealGroup({ children, delay = 0 }) {
    const ref = useScrollReveal();
    return (
        <div
            ref={ref}
            className="reveal"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function Skills() {
    const titleRef = useScrollReveal();

    return (
        <section id="skills" className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section label */}
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// technical_stack"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Skills</h2>
                </div>

                {/* C++ featured */}
                <RevealGroup delay={0}>
                    <div className="mb-10 p-5 rounded-xl border border-amber-400/20 bg-amber-400/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(251,191,36,0.06),transparent)]" />
                        <div className="relative flex flex-wrap items-center gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="font-mono text-amber-400 text-xl font-bold">C++</span>
                                    <span className="font-mono text-xs bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded">
                                        PRIMARY
                                    </span>
                                    <span className="font-mono text-xs text-slate-500">C++17/20 · 7+ years</span>
                                </div>
                                <p className="text-sm text-slate-400 max-w-xl">
                                    Engine & plugin development, RAII, template metaprogramming, multithreading, deterministic
                                    resource management, and performance profiling in production environments.
                                </p>
                            </div>
                            <a
                                href="https://verify.openedg.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto font-mono text-xs border border-amber-400/40 text-amber-400 px-3 py-1.5 rounded hover:bg-amber-400/10 transition-colors whitespace-nowrap"
                            >
                                ✓ CPA Certified →
                            </a>
                        </div>
                    </div>
                </RevealGroup>

                {/* Skill groups */}
                <div className="grid md:grid-cols-3 gap-8">
                    {GROUPS.map((group, gi) => (
                        <RevealGroup key={group.label} delay={gi * 100}>
                            <div>
                                <p className="font-mono text-xs text-slate-500 mb-4">{group.label}</p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item.name}
                                            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                                                item.level === "learning"
                                                    ? "border-slate-700 text-slate-500 bg-slate-900"
                                                    : "border-sky-400/30 text-sky-300 bg-sky-400/5 hover:bg-sky-400/10"
                                            }`}
                                        >
                                            {item.name}
                                            {item.level === "learning" && (
                                                <span className="ml-1.5 text-slate-600">learning</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealGroup>
                    ))}
                </div>
            </div>
        </section>
    );
}
