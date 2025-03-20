import { useEffect, useRef } from "react";
import ProfilePicture from "../../profile-picture.jpg";

function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className="relative h-screen overflow-hidden bg-black">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
                <div className="absolute inset-0 opacity-20 bg-grid" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-8">
                    <img
                        src={ProfilePicture}
                        alt="Juan Pablo Hernandez Mosti"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
                    Juan Pablo Hernandez Mosti
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 text-center">
                    Senior Software Developer
                </h2>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-12">
                    Crafting exceptional digital experiences through elegant
                    code and innovative solutions. Specialized in Game
                    Development, VR/AR, and Blockchain technologies.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <span className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                        C++ / Unreal Engine
                    </span>
                    <span className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                        VR / AR Development
                    </span>
                    <span className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                        Blockchain
                    </span>
                    <span className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                        Full Stack
                    </span>
                </div>

                <a
                    href="#projects"
                    className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    View My Work
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
}

export default Hero;
