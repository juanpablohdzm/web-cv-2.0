import useScrollReveal from "../hooks/useScrollReveal";

const FAB_URL = "https://www.fab.com/listings/26d9ed51-79ce-484e-8178-16bad2a2ae8c";
const GITHUB_URL = "https://github.com/juanpablohdzm/quick_tween";
const PREVIEW_IMAGE = `${process.env.PUBLIC_URL}/quicktweenbanner.jpg`;

function QuickTweenCard() {
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="reveal max-w-sm">
            <div className="rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/30 transition-colors overflow-hidden flex flex-col">

                {/* ── Image banner ── */}
                <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                    <img
                        src={PREVIEW_IMAGE}
                        alt="QuickTween preview"
                        className="relative z-10 w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-900 flex items-center justify-center">
                        <div className="text-center select-none">
                            <p className="font-mono text-amber-400/40 text-4xl font-bold tracking-tight">QT</p>
                            <p className="font-mono text-slate-600 text-xs mt-1">QuickTween</p>
                        </div>
                    </div>

                    {/* Fab badge */}
                    <a
                        href={FAB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-full border border-white/10 hover:bg-black/90 transition-colors z-20"
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Available on Fab
                    </a>
                </div>

                {/* ── Info section ── */}
                <div className="p-4 flex flex-col gap-3">
                    <div>
                        <span className="font-mono text-xs text-slate-500">Public repository · Fab Marketplace</span>
                        <h3 className="text-slate-100 font-semibold text-base mt-0.5 mb-1.5">QuickTween</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            A lightweight C++ tweening library for Unreal Engine. Provides smooth interpolation
                            utilities for gameplay values, UI animations, and runtime property transitions —
                            with a clean API designed around Unreal's actor/component model.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {["C++", "Unreal Engine", "Plugin", "Animation"].map((tag) => (
                            <span key={tag} className="font-mono text-xs text-amber-400 bg-amber-400/5 border border-amber-400/20 px-1.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded border border-slate-700 text-slate-400 hover:border-sky-400/50 hover:text-sky-400 transition-colors"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={FAB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            View on Fab →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const titleRef = useScrollReveal();

    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// projects"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Open Source & Notable Work</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <QuickTweenCard />
                </div>
            </div>
        </section>
    );
}
