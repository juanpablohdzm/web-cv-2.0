function CoreValues() {
    const values = [
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            ),
            title: "Passion",
            description:
                "The excitement that I have when I create something with code is beyond others imagination, passion is the fuel that drives me every day to create top-quality products.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Responsability",
            description:
                "In order to create something unique, others need to know that I am responsible for getting the job done. This way, my co-workers can focus on their own tasks. I take full ownership of my work, ensuring that every detail is addressed and that I deliver on time. By doing so, I create an environment of trust and accountability, where everyone can contribute their best.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            ),
            title: "Communication",
            description:
                "Great developers are not a one-man army; we have others we can rely on. Therefore, communication is a vital skill to have. I always make sure to communicate any problems, solutions, and discoveries I come across.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Honesty",
            description:
                "Along with communication, I believe in being respectfully honest. I will always make sure to acknowledge those who truly deserve credit, and take responsibility for any problems or challenges I may have contributed to.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                </svg>
            ),
            title: "Quality",
            description:
                "Quality is the most important aspect of any project. I always strive to deliver the best possible quality, regardless of the circumstances. I believe that true quality comes from commitment and dedication, a keen attention to detail, and the ability to recognize and overcome my own difficulties.",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black/10 transition-colors">
                                <div className="text-gray-700">
                                    {value.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
