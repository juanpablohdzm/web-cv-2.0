import { useEffect } from "react";
import feather from "feather-icons";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import ProjectCard from "./components/Projects/ProjectCard";
import ExperienceCard from "./components/Experience/ExperienceCard";
import Game from "./components/Game";

function App() {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Projects Section */}
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

            {/* Experience Section */}
            <section id="experience" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Professional Experience
                        </h2>
                        <p className="text-xl text-gray-600">
                            My journey in software development
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ExperienceCard
                            company="AppLayer"
                            title="Unreal Engine C++/Blockchain Architecture Developer"
                            time="November 2024 - Present"
                            tags={[
                                "C++",
                                "Unreal Engine",
                                "Solidity",
                                "Slate",
                                "UMG",
                            ]}
                            fileUrl="recommendations/AppLayer.pdf"
                        />
                        <ExperienceCard
                            company="Realworld-one"
                            title="Unreal Engine C++ Architecture Developer"
                            time="July 2023 - November 2024"
                            tags={["C++", "Unreal Engine", "Slate", "UMG"]}
                            fileUrl="recommendations/RW1.pdf"
                            videoUrls={[
                                "https://www.youtube.com/embed/yEFp-uGQplw",
                                "https://www.youtube.com/embed/QbGkDOQE9YU",
                            ]}
                        />
                        <ExperienceCard
                            company="RuckusDev"
                            title="Unreal Engine C++ Architecture Developer"
                            time="October 2020- February 2021"
                            tags={["C++", "Unreal Engine", "Slate", "UMG"]}
                            fileUrl="recommendations/ruckusDev.pdf"
                        />
                        <ExperienceCard
                            company="CheerioWorld/3DIQ"
                            title="VR Developer"
                            time="April 2019 - October 2022"
                            tags={[
                                "C#",
                                "Unity",
                                "VR",
                                "Photon",
                                "TS",
                                "React-Native",
                                "GraphQL",
                            ]}
                            fileUrl="recommendations/Cheerio.pdf"
                            videoUrls={[
                                "https://www.youtube.com/embed/mlJCEAxrGio",
                                "https://www.youtube.com/embed/gxePUMuYZSc",
                            ]}
                        />
                        <ExperienceCard
                            company="Framestore"
                            title="Unreal Engine VR Developer"
                            time="October 2022 - February 2023"
                            tags={["C++", "Unreal Engine", "VR", "Networking"]}
                            fileUrl="recommendations/Cheerio.pdf"
                            videoUrls={[
                                "https://www.youtube.com/embed/R5aQGuTQI7E",
                            ]}
                        />
                        <ExperienceCard
                            company="Universidad Panamericana"
                            title="Image processing research assistant"
                            time="June 2018 - January 2019"
                            tags={["C#", "Unity", "VR", "Matlab"]}
                        />
                        <ExperienceCard
                            company="Inmersys"
                            title="XR Gameplay programmer"
                            time="June 2017 - January 2018"
                            tags={["C#", "Unity", "VR", "XR", "Firebase"]}
                        />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Education
                        </h2>
                        <p className="text-xl text-gray-600">
                            My academic background and certifications
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Certifications
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <i
                                            data-feather="award"
                                            className="w-5 h-5 text-blue-500 mr-3"
                                        ></i>
                                        <span className="text-gray-600">
                                            C++ Certified Associate Programmer
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <i
                                            data-feather="book"
                                            className="w-5 h-5 text-blue-500 mr-3"
                                        ></i>
                                        <span className="text-gray-600">
                                            Computer Graphics Engineer -
                                            Universidad Panamericana
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <i
                                            data-feather="book"
                                            className="w-5 h-5 text-blue-500 mr-3"
                                        ></i>
                                        <span className="text-gray-600">
                                            Graphic Simulation Specialty -
                                            Universidad Panamericana
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        I'm always interested in hearing about new projects and
                        opportunities.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.linkedin.com/in/juan-pablo-h-b64094147/"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <i
                                data-feather="linkedin"
                                className="w-6 h-6 text-gray-600"
                            ></i>
                        </a>
                        <a
                            href="mailto:juanpablohdzm95@gmail.com"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <i
                                data-feather="mail"
                                className="w-6 h-6 text-gray-600"
                            ></i>
                        </a>
                        <a
                            href="https://github.com/juanpablohdzm"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <i
                                data-feather="github"
                                className="w-6 h-6 text-gray-600"
                            ></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
