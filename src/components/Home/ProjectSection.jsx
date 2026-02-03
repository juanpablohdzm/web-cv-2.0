import ProjectCard from "../Projects/ProjectCard";

function ProjectSection() {
    return (
        <section
            id="projects"
            className="py-24 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Selected Work
                        </h2>
                        <p className="text-lg text-gray-600 max-w-xl">
                            A snapshot of systems I’ve designed and delivered
                            across engines, platforms, and domains.
                        </p>
                    </div>
                    <div className="text-sm text-gray-500">
                        Representative, not exhaustive – more details available
                        on request.
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <ProjectCard
                        identifier="02"
                        title="Modular Notification System"
                        tools={[
                            "C++",
                            "Unreal Engine",
                            "BP",
                            "Reflection",
                            "Multithreading",
                        ]}
                        description="A sophisticated notification system created in C++, exposed to Blueprint using Unreal's reflection system. Enables dynamic notification generation and system integration."
                    />
                    <ProjectCard
                        identifier="03"
                        title="Server-authoritative blockchain multiplayer prototype"
                        tools={[
                            "C++",
                            "Unreal Engine",
                            "Solidity",
                            "Deterministic state",
                            "Replication",
                        ]}
                        description="A server-authoritative multiplayer prototype where Unreal Engine integrates directly with smart contracts as the authoritative backend, ensuring deterministic action ordering and synchronized on-chain state."
                    />
                    <ProjectCard
                        identifier="04"
                        title="Couch – Social VR video experience"
                        tools={[
                            "C#",
                            "Unity",
                            "VR",
                            "XR",
                            "Mobile",
                            "Photon",
                            "Multiplayer",
                        ]}
                        description="A multiplayer VR experience that enables users to watch YouTube videos together in a virtual session, built with Unity and Photon for seamless networking."
                    />
                    <ProjectCard
                        identifier="05"
                        title="Nevermet – Social mobile application"
                        tools={[
                            "Javascript",
                            "React Native",
                            "GraphQL",
                            "iOS",
                            "Android",
                        ]}
                        description="A cross-platform mobile application built with React Native and GraphQL, focusing on performant, real-time social interactions and a smooth UX on both iOS and Android."
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
