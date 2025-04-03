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

    return (
        <section id="gossip" className="py-24 bg-gray-50 flex flex-col items-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Testimonials
                </h2>
                <p className="text-xl text-gray-600">
                    What people say about me
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
                { testimonials.map((testimonial, index) => {
                    return (<div
                        key={index}
                        className={""}
                    >
                        <TestimonialCard
                            title={testimonial.title}
                            description={testimonial.description}
                            company={testimonial.company}
                        />
                    </div>)})
                }
            </div>
        </section>
    );
}

export default GossipSection;
