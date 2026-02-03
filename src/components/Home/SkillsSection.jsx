import React from "react";

function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Skills & Tech Stack
                    </h2>
                    <p className="text-xl text-gray-600">
                        The tools and technologies I use to deliver reliable,
                        production-grade systems
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Programming Languages
                        </h3>
                        <p className="text-gray-700">
                            C++, C#, JavaScript, Solidity, HTML, CSS, Rust, SQL
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Frameworks & Engines
                        </h3>
                        <p className="text-gray-700">
                            Unreal Engine (C++, Blueprints, Slate), Unity,
                            React, React Native, Node.js, GraphQL, MongoDB,
                            Ether.js, PlayCanvas
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Tools & Platforms
                        </h3>
                        <p className="text-gray-700">
                            Git, Perforce, Docker, Foundry, Photon, Azure
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Languages
                        </h3>
                        <p className="text-gray-700">
                            Spanish (Native), English (Proficient), Italian
                            (Proficient), Japanese (Basic)
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Focus Areas
                        </h3>
                        <p className="text-gray-700">
                            Low-level engine development, real-time and
                            distributed systems, VR/AR, blockchain-backed
                            backends, and cloud-integrated workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
