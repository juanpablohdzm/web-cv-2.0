import { useState, useEffect } from "react";
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

const CODE_SNIPPETS = [
    {
        filename: "owner_ptr.hpp",
        code:
`// RAII — exclusive ownership
template<typename T>
class OwnerPtr {
public:
    explicit OwnerPtr(T* p = nullptr)
        : _ptr(p) {}

    // Non-copyable
    OwnerPtr(const OwnerPtr&) = delete;
    OwnerPtr& operator=(const OwnerPtr&) = delete;

    // Movable
    OwnerPtr(OwnerPtr&& o) noexcept
        : _ptr(o._ptr) { o._ptr = nullptr; }

    ~OwnerPtr() { delete _ptr; }

    T* get() const noexcept { return _ptr; }

private:
    T* _ptr;
};`,
    },
    {
        filename: "worker_pool.hpp",
        code:
`// Thread-safe job queue
class WorkerPool {
    std::vector<std::thread> m_workers;
    std::queue<std::function<void()>> m_jobs;
    std::mutex m_mutex;
    std::condition_variable m_cv;
    bool m_stop = false;

public:
    void Enqueue(std::function<void()> job) {
        {
            std::lock_guard lock(m_mutex);
            m_jobs.push(std::move(job));
        }
        m_cv.notify_one();
    }

    ~WorkerPool() { Stop(); }
};`,
    },
    {
        filename: "mover.cpp",
        code:
`// Unreal Engine — tween to target
UFUNCTION(BlueprintCallable)
void AMover::MoveTo(FVector target) {
    UQuickTween::To(this, 0.8f)
        .From(GetActorLocation())
        .To(target)
        .Ease(EEaseType::OutBack)
        .OnComplete(
            FSimpleDelegate::CreateUObject(
                this, &AMover::OnMoveComplete
            )
        )
        .Play();
}`,
    },
];

const KEYWORDS = new Set([
    "template","class","typename","public","private","explicit",
    "delete","return","for","auto","void","nullptr","this","new",
    "const","static","noexcept","bool","int","float","true","false",
    "operator","struct","using","namespace","inline","virtual","override",
]);
const STD_TYPES = new Set([
    "std","vector","thread","queue","function","mutex","condition_variable",
    "lock_guard","unique_lock","move","forward",
]);
const UE_TYPES = new Set([
    "UQuickTween","EEaseType","FVector","FSimpleDelegate","AMover",
    "UFUNCTION","BlueprintCallable",
]);

function tokenizeLine(line) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("//")) {
        return [{ cls: "text-slate-500", text: line }];
    }
    if (trimmed.startsWith("UFUNCTION")) {
        return [{ cls: "text-emerald-400/80", text: line }];
    }
    const tokens = [];
    const re = /(\b\w+\b)|([^\w])/g;
    let m;
    while ((m = re.exec(line)) !== null) {
        const word = m[1], sym = m[2];
        if (word) {
            if (KEYWORDS.has(word))      tokens.push({ cls: "text-violet-400",  text: word });
            else if (UE_TYPES.has(word)) tokens.push({ cls: "text-amber-400",   text: word });
            else if (STD_TYPES.has(word))tokens.push({ cls: "text-sky-400",     text: word });
            else if (/^\d+(\.\d+)?f?$/.test(word)) tokens.push({ cls: "text-orange-400", text: word });
            else                         tokens.push({ cls: "text-slate-200",   text: word });
        } else {
            tokens.push({ cls: "text-slate-400", text: sym });
        }
    }
    return tokens;
}

function AnimatedCodeBlock() {
    const [idx, setIdx]             = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase]         = useState("typing");
    const [cursorOn, setCursorOn]   = useState(true);

    useEffect(() => {
        const id = setInterval(() => setCursorOn(v => !v), 530);
        return () => clearInterval(id);
    }, []);

    const full = CODE_SNIPPETS[idx].code;

    useEffect(() => {
        if (phase === "typing") {
            if (displayed.length < full.length) {
                const id = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 28);
                return () => clearTimeout(id);
            }
            const id = setTimeout(() => setPhase("deleting"), 2500);
            return () => clearTimeout(id);
        }
        if (phase === "deleting") {
            if (displayed.length > 0) {
                const id = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 10);
                return () => clearTimeout(id);
            }
            const id = setTimeout(() => {
                setIdx(i => (i + 1) % CODE_SNIPPETS.length);
                setPhase("typing");
            }, 400);
            return () => clearTimeout(id);
        }
    }, [phase, displayed, full]);

    const lines = displayed.split("\n");

    return (
        <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-sky-400/5">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">
                    {CODE_SNIPPETS[idx].filename}
                </span>
            </div>
            {/* Code area */}
            <div className="bg-slate-900 p-5 min-h-[320px]">
                <pre className="font-mono text-xs leading-relaxed">
                    {lines.map((line, i) => {
                        const isLast = i === lines.length - 1;
                        const tokens = tokenizeLine(line);
                        return (
                            <div key={i} className="flex">
                                <span className="text-slate-700 mr-4 w-5 text-right shrink-0 select-none">{i + 1}</span>
                                <span>
                                    {tokens.map((tok, j) => (
                                        <span key={j} className={tok.cls}>{tok.text}</span>
                                    ))}
                                    {isLast && (
                                        <span className={`text-sky-400 ${cursorOn ? "opacity-100" : "opacity-0"}`}>▌</span>
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </pre>
            </div>
        </div>
    );
}

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

                {/* Right column — animated code block (desktop only) */}
                <div className="hidden md:block">
                    <AnimatedCodeBlock />
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
