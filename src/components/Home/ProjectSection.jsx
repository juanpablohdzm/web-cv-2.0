import Game from "../Game";
import ProjectCard from "../Projects/ProjectCard";

function ProjectSection() {
    return(
        <section id="projects" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600">
                        A collection of some of my work
                    </p>
                </div>

                {/* Interactive Game Demo */}
                <div className="mb-24">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <Game />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
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
                        title="Blockchain plugin"
                        tools={[
                            "C++",
                            "Unreal Engine",
                            "Solidity",
                            "BP",
                            "Reflection",
                            "Multithreading",
                        ]}
                        description="A comprehensive blockchain plugin for Unreal Engine, enabling seamless interaction with the Ethereum blockchain through C++ and Blueprint interfaces."
                    />
                    <ProjectCard
                        identifier="04"
                        title="Couch"
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
                        title="Nevermet"
                        tools={[
                            "Javascript",
                            "React Native",
                            "GraphQL",
                            "iOS",
                            "Android",
                        ]}
                        description="Nevermet is a mobile application that allows users to meet new people. Created with React Native and GraphQL for the backend"
                    />
                </div>
            </div>
        </section>
    );
}

export default  ProjectSection;