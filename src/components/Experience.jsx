import useScrollReveal from "../hooks/useScrollReveal";

const EXPERIENCE = [
    {
        company: "4D Pipeline",
        role: "Senior C++ Software Engineer",
        dates: "May 2025 – Present",
        bullets: [
            "Developing real-time 3D pipeline tooling and engine integrations in C++.",
            "Working on high-performance data streaming and scene graph systems.",
        ],
        tags: ["C++", "Real-time", "3D Pipeline"],
    },
    {
        company: "AppLayer",
        role: "Senior C++ Software Engineer",
        dates: "Nov 2024 – May 2025",
        bullets: [
            "Built core blockchain node infrastructure using advanced C++ templates, threading, and RAII patterns.",
            "Contributed to Build the Void — a real-time multiplayer on-chain game requiring deterministic simulation.",
            "Implemented Unreal Engine integrations for on-chain state synchronization.",
        ],
        tags: ["C++17/20", "Blockchain", "Unreal Engine", "Multithreading"],
    },
    {
        company: "Realworld-one",
        role: "Senior Software Engineer",
        dates: "Jul 2023 – Nov 2024",
        bullets: [
            "Led XR/VR development for enterprise training simulations in Unreal Engine (C++).",
            "Designed plugin architecture for real-time analytics and user interaction tracking.",
            "Maintained performance targets across Meta Quest and PC VR platforms.",
        ],
        tags: ["C++", "Unreal Engine", "VR/XR", "Meta Quest"],
    },
    {
        company: "RuckusDev",
        role: "Software Engineer",
        dates: "Oct 2022 – May 2023",
        bullets: [
            "Developed multiplayer game features using Unreal Engine C++ and Photon networking.",
            "Implemented gameplay systems, state machines, and server-side logic.",
        ],
        tags: ["C++", "Unreal Engine", "Photon", "Multiplayer"],
    },
    {
        company: "CheerioWorld / 3DIQ",
        role: "Software Engineer",
        dates: "Apr 2019 – Oct 2022",
        bullets: [
            "Built VR and AR experiences in Unity (C#) and Unreal Engine (C++) for educational clients.",
            "Architected a cross-platform real-time synchronization layer using Photon PUN.",
            "Maintained a React Native mobile companion app and Node.js backend services.",
        ],
        tags: ["C#", "Unity", "C++", "Unreal", "React Native", "Node.js"],
    },
    {
        company: "Framestore",
        role: "Software Engineer (Contract)",
        dates: "Oct 2020 – Feb 2021",
        bullets: [
            "Concurrent contract — delivered VR pipeline tooling for film production environments.",
            "Integrated Unreal Engine render pipelines with proprietary Framestore asset systems.",
        ],
        tags: ["C++", "Unreal Engine", "VFX Pipeline"],
    },
    {
        company: "Universidad Panamericana",
        role: "Research & Teaching Assistant",
        dates: "Jun 2018 – Jan 2019",
        bullets: [
            "Co-authored research on VR therapy for people with ASD — presented and published.",
            "Assisted in software engineering coursework and laboratory sessions.",
        ],
        tags: ["VR", "Research", "Unity"],
    },
    {
        company: "Inmersys",
        role: "Junior Software Engineer",
        dates: "Jun 2017 – Jan 2018",
        bullets: [
            "Developed early VR training simulations using Unity and C#.",
            "Contributed to client demos and interactive architectural visualizations.",
        ],
        tags: ["Unity", "C#", "VR"],
    },
];

function ExperienceCard({ item, index }) {
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="reveal relative pl-8" style={{ transitionDelay: `${index * 80}ms` }}>
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 border-2 border-slate-950 z-10" />

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                        <h3 className="text-slate-100 font-semibold">{item.role}</h3>
                        <p className="text-sky-400 text-sm font-medium">{item.company}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 whitespace-nowrap">{item.dates}</span>
                </div>

                <ul className="space-y-1.5 mb-4">
                    {item.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-slate-400 flex gap-2">
                            <span className="text-slate-600 mt-0.5 shrink-0">—</span>
                            {b}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const titleRef = useScrollReveal();

    return (
        <section id="experience" className="py-24 bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={titleRef} className="reveal mb-12">
                    <p className="font-mono text-xs text-slate-500 mb-2">{"// experience"}</p>
                    <h2 className="text-2xl font-bold text-slate-100">Work History</h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[4px] top-2 bottom-2 w-px bg-sky-400/20" />

                    <div className="flex flex-col gap-6">
                        {EXPERIENCE.map((item, i) => (
                            <ExperienceCard key={item.company + item.dates} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
