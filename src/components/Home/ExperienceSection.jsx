import ExperienceCard from "../Experience/ExperienceCard";

function ExperienceSection() {
    return(
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
    </section>);
}

export default ExperienceSection;