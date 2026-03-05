import { useState, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const EXPERIENCE = [
    {
        company: "4D Pipeline",
        role: "Senior C++ Software Engineer",
        dates: "May 2025 – Present",
        bullets: [
            "Developing real-time 3D pipeline tooling and engine integrations in C++.",
            "Working on data streaming and scene graph systems.",
            "Implemented Amazon VAMS (Visual Asset Management System) — an AWS open-source solution for managing 3D assets and digital twins, connecting real-time 3D pipelines with cloud-based asset workflows.",
        ],
        tags: ["C++", "Real-time", "3D Pipeline", "AWS", "VAMS"],
        detail: {
            context: "At 4D Pipeline I work at the intersection of real-time 3D engines and cloud infrastructure, building the tooling layer that connects high-performance rendering pipelines with asset management at scale.",
            highlights: [
                "Architecting scene graph systems that handle data streaming with minimal latency, targeting production-grade real-time environments.",
                "Implemented Amazon VAMS — an open-source AWS solution for digital twin asset management — bridging real-time 3D pipelines with cloud-native workflows.",
                "Designing engine integration layers in modern C++ (C++17/20) with a focus on performance, correctness, and maintainability across large codebases.",
                "Working with pre-existing code base expanding and improving previous architecture.",
            ],
        },
    },
    {
        company: "AppLayer",
        role: "Senior C++ Software Engineer",
        dates: "Nov 2024 – May 2025",
        bullets: [
            "Implement blockchain node infrastructure using advanced C++ templates, threading, and RAII patterns.",
            "Contributed to Build the Void — a real-time serverless multiplayer on-chain game.",
            "Implemented Unreal Engine integrations for on-chain state synchronization.",
        ],
        tags: ["C++17/20", "Blockchain", "Unreal Engine", "Multithreading"],
        detail: {
            context: "AppLayer is building a high-performance blockchain platform where on-chain state and real-time gameplay must remain in perfect sync. The role demanded deep C++ expertise and an understanding of both distributed systems and game engine architecture.",
            highlights: [
                "Implemented blockchain node infrastructure using advanced C++ template metaprogramming, and strict RAII resource management.",
                "Contributed to 'Build the Void' — a real-time multiplayer on-chain game where all game state lives on the blockchain, requiring fully deterministic simulation and sub-frame latency budgets.",
                "Built Unreal Engine modules that synchronize on-chain state with the game world in real time, handling deserialization, event dispatch, and rollback scenarios.",
                "Applied C++17/20 features (concepts, ranges, coroutines) to write expressive, zero-overhead abstractions for the node communication layer.",
            ],
        },
    },
    {
        company: "Realworld-one",
        role: "Senior Software Engineer",
        dates: "Jul 2023 – Nov 2024",
        bullets: [
            "XR/VR development for enterprise training simulations in Unreal Engine (C++).",
            "Designed plugin architecture for real-time analytics and user interaction tracking.",
            "Maintained performance targets across Meta Quest and PC VR platforms.",
        ],
        tags: ["C++", "Unreal Engine", "VR/XR", "Meta Quest"],
        detail: {
            context: "Realworld-one delivers enterprise XR training products used by Fortune 500 companies. I led the engineering effort on the Unreal Engine side, owning everything from plugin architecture to cross-platform performance.",
            highlights: [
                "Designed a modular plugin architecture for real-time analytics, enabling non-engineers to instrument training scenarios and export interaction data without touching engine code.",
                "Maintained strict performance budgets (90fps on Meta Quest 3, 60fps+ on PC VR), profiling with Unreal Insights and writing custom RHI optimizations.",
                "Implemented adaptive level-of-detail and occlusion strategies to keep complex industrial environments within mobile VR constraints.",
            ],
        },
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
        detail: {
            context: "RuckusDev (Plan A Studio) contracted me to extend their multiplayer title with new gameplay systems and to reinforce the network architecture using Photon.",
            highlights: [
                "Built gameplay systems from scratch in Unreal Engine C++.",
                "Debugged and refactored existing Blueprint and C++ systems, improving code clarity and reducing frame-time spikes in gameplay-heavy scenes.",
                "Developed in-game UI widgets connected to live backend data using Unreal's UMG and Slate systems.",
            ],
        },
    },
    {
        company: "CheerioWorld / 3DIQ",
        role: "Software Engineer",
        dates: "Apr 2019 – Oct 2022",
        bullets: [
            "Built VR and AR experiences in Unity (C#) and Unreal Engine (C++) for educational clients.",
            "Integrated Photon SDK for real-time multiplayer, implementing room management, event serialization, and latency compensation strategies.",
            "Maintained a React Native mobile companion app with Node.js backend services.",
        ],
        tags: ["C#", "Unity", "C++", "Unreal", "React Native", "Node.js"],
        detail: {
            context: "Over three years at CheerioWorld / 3DIQ I grew from mid-level to senior scope, owning full-stack delivery of interactive XR products — from engine code through to the mobile apps and backend services that supported them.",
            highlights: [
                "Delivered 10+ VR and AR educational experiences for clients in the US and Mexico, using Unity (C#) and Unreal Engine (C++).",
                "Integrated Photon SDK for real-time multiplayer, implementing room management, event serialization, and latency compensation strategies.",
                "Built and maintained a React Native companion app with Node.js/GraphQL backend",
                "Introduced automated testing and CI pipelines for the Unity projects, reducing regression bugs across quarterly releases.",
                "Mentored junior developers and established internal coding standards for engine-side C# and C++ work.",
            ],
        },
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
        detail: {
            context: "Framestore is one of the world's leading VFX studios. I joined as a concurrent contract engineer to help bridge their proprietary asset pipeline with real-time Unreal Engine workflows during a period of rapid internal adoption of real-time rendering.",
            highlights: [
                "Integrated Unreal's render pipeline with internal asset management systems, allowing artists to iterate on real-time previsualization without leaving their existing DCC workflow.",
                "Worked alongside VFX supervisors and pipeline TDs to understand production constraints and deliver tools that fit seamlessly into established studio processes.",
            ],
        },
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
        detail: {
            context: "During my final year of university I joined the research faculty to apply VR as a therapeutic tool, combining software engineering with applied psychology research.",
            highlights: [
                "Co-authored a peer-reviewed paper on using VR environments for social skills therapy in individuals with Autism Spectrum Disorder (ASD).",
                "Presented the research at an academic conference, receiving recognition for the applied engineering approach to a clinical problem.",
                "Built the VR therapy prototypes in Unity (C#), designing calm and controlled sensory environments validated with clinical consultants.",
                "Assisted professors in delivering software engineering labs, running sessions on OOP, data structures, and game development fundamentals.",
            ],
        },
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
        detail: {
            context: "Inmersys was my first professional role, where I joined a small team building VR training and visualization products for B2B clients in Mexico. This is where my passion for real-time 3D systems was shaped.",
            highlights: [
                "Built interactive VR training simulations in Unity (C#) for industrial clients, covering safety procedures and equipment operation.",
                "Contributed to architectural visualization demos that gave clients real-time walkthroughs of buildings before construction.",
                "Learned the fundamentals of real-time rendering, 3D asset pipelines, and client-facing software delivery under senior mentorship.",
            ],
        },
    },
];

function ExperienceModal({ item, onClose }) {
    const [visible, setVisible] = useState(false);

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
                className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-slate-800">
                    <div>
                        <h3 className="text-slate-100 font-semibold text-lg leading-tight">{item.role}</h3>
                        <p className="text-sky-400 text-sm font-medium mt-0.5">{item.company}</p>
                        <p className="font-mono text-xs text-slate-500 mt-1">{item.dates}</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors mt-0.5"
                        aria-label="Close"
                    >
                        <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="overflow-y-auto px-6 py-5 space-y-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{item.detail.context}</p>

                    <div>
                        <p className="font-mono text-xs text-slate-500 mb-3">// key_contributions</p>
                        <ul className="space-y-2.5">
                            {item.detail.highlights.map((h, i) => (
                                <li key={i} className="text-sm text-slate-300 flex gap-3">
                                    <span className="text-sky-400/60 mt-0.5 shrink-0">▸</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-xs text-slate-500 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExperienceCard({ item, index }) {
    const ref = useScrollReveal();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
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

                    <div className="flex flex-wrap items-center justify-between gap-3">
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
                        <button
                            onClick={() => setShowModal(true)}
                            className="shrink-0 font-mono text-xs border border-slate-700 text-slate-400 px-3 py-1.5 rounded hover:border-sky-400/50 hover:text-sky-400 transition-colors"
                        >
                            View more →
                        </button>
                    </div>
                </div>
            </div>

            {showModal && <ExperienceModal item={item} onClose={() => setShowModal(false)} />}
        </>
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
