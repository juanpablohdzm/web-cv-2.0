import { useState, useEffect } from "react";
import TestimonialCard from "../Testimonials/TestimonialCard";

function GossipSection() {
    const testimonials = [
        {
            title: "Beyond comfort zone",
            description: "he could handle advanced C++ concepts, [...] well outside the usual Unreal sphere. It was a clear sign that he’s not only comfortable in new territory, but he’ll also push himself beyond his comfort zone to find the right solution",
            company: "Applayer"
        },
        {
            title: "Comprehensive and diverse skill set",
            description: "Mr. Hernandez Mosti possesses a comprehensive and diverse skill set, which allowed him to understand complex situations, identify the root causes of issues, and develop effective solutions. His dedication and proactive approach ensured that he always took the initiative in his tasks, fully committing himself to his role's responsibilities and to the company.",
            company: "Realworld-one"
        },
        {
            title: "Very experienced",
            description: "He’s very experienced with Unreal Engine development and enjoys learning new languages and tools. He is also dependable, collaborative, a pleasure to work with and I have enjoyed my time working with him.",
            company: "RuckusDev"
        },
        {
            title: "Most valued contractor",
            description: "Juan has been one of our most valued contractors we’ve worked with. He’s very experienced with unity development and enjoys learning new languages and tools. He’s dependable, collaborative, and a pleasure to work with",
            company: "CheerioWorld/3DIQ"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [fade, setFade] = useState(true);
    const delay = 5000;

    useEffect(() => {
        if (!isHovering) {
            const timer = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
                    setFade(true);
                }, 500); // match fade out duration
            }, delay);
            return () => clearInterval(timer);
        }
    }, [testimonials.length, isHovering]);

    const handleDotClick = (index) => {
        if (index !== current) {
            setFade(false);
            setTimeout(() => {
                setCurrent(index);
                setFade(true);
            }, 500);
        }
    };

    return (
        <section id="gossip" className="py-24 bg-gray-50 min-h-[700px] flex flex-col items-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Testimonials
                </h2>
                <p className="text-xl text-gray-600">
                    What people say about me
                </p>
            </div>
            <div className="w-full max-w-xl px-4">
                <div
                    className={`relative transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                    onPointerEnter={() => setIsHovering(true)}
                    onPointerLeave={() => setIsHovering(false)}
                >
                    <TestimonialCard
                        title={testimonials[current].title}
                        description={testimonials[current].description}
                        company={testimonials[current].company}
                    />
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={index === current ? 'bg-gray-800 w-3 h-3 rounded-full' : 'bg-gray-300 w-3 h-3 rounded-full'}
                            onClick={() => handleDotClick(index)}
                            onPointerEnter={() => setIsHovering(true)}
                            onPointerLeave={() => setIsHovering(false)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GossipSection;
