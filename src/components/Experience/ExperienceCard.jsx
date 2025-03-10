import Tag from "../Utilities/Tag";
import feather from "feather-icons";
import { useEffect, useState } from "react";

function ExperienceCard({ company, title, time, tags, fileUrl, videoUrls }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [fade, setFade] = useState(true); // Controls fade transition

    useEffect(() => {
        feather.replace();
    }, []);

    useEffect(() => {
        if (!videoUrls || videoUrls.length <= 1) return;

        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setFade(false); // Start fading out
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
                    setFade(true); // Fade back in
                }, 500); // Delay for smooth transition
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isHovered, videoUrls]);

    return (
        <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col h-full min-h-[300px] text-center">
            <div className="flex-grow">
                <div className="flex flex-wrap justify-center">
                    <h2 className="font-semibold text-gray-700 text-2xl mb-4">{company}</h2>
                    <h2 className="font-semibold text-gray-700 text-2xl mb-4">{title}</h2>
                    <h4 className="font-medium text-gray-700 text-lg mb-4">{time}</h4>
                </div>

                <div className="my-10">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag, index) => <Tag key={index} text={tag} />)}
                    </div>
                </div>

                {videoUrls && videoUrls.length > 0 && (
                    <div
                        className="w-full flex flex-col items-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Smooth Fade Transition */}
                        <iframe
                            key={currentIndex}
                            src={videoUrls[currentIndex]}
                            title={`YouTube video ${currentIndex + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className={`w-full h-64 rounded-md transition-opacity duration-500 ease-in-out ${
                                fade ? "opacity-100" : "opacity-0"
                            } mb-4`}
                        ></iframe>

                        {/* Dots for Navigation */}
                        <div className="flex gap-2 justify-center mb-5">
                            {videoUrls.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
                                    }`}
                                    onClick={() => {
                                        setFade(false);
                                        setTimeout(() => {
                                            setCurrentIndex(index);
                                            setFade(true);
                                        }, 300);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {fileUrl && (
                    <a
                        href={fileUrl}
                        download
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition flex items-center gap-2 justify-center mt-5"
                    >
                        <i data-feather="download"></i>
                        <span>Recommendation Letter</span>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ExperienceCard;
