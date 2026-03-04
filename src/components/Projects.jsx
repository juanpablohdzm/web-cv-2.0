import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
    const titleRef = useScrollReveal();
    const quickTweenRef = useScrollReveal();

    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// projects"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Open Source & Notable Work</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* QuickTween */}
                    <div ref={quickTweenRef} className="reveal">
                        <div className="h-full p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400/30 transition-colors flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-xs text-slate-500">Public repository</span>
                            </div>

                            <h3 className="text-slate-100 font-semibold text-lg mb-2">QuickTween</h3>
                            <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                A lightweight C++ tweening library for Unreal Engine. Provides smooth interpolation
                                utilities for gameplay values, UI animations, and runtime property transitions —
                                with a clean API designed around Unreal's actor/component model.
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {["C++", "Unreal Engine", "Plugin"].map((tag) => (
                                        <span key={tag} className="font-mono text-xs text-amber-400 bg-amber-400/5 border border-amber-400/20 px-2 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href="https://github.com/juanpablohdzm/quick_tween"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded border border-sky-400/40 text-sky-400 hover:bg-sky-400/10 transition-colors"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
