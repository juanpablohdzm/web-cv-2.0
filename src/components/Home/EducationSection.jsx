import { useEffect } from "react";
import feather from "feather-icons";

function EducationSection() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <section id="education" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Education
                    </h2>
                    <p className="text-xl text-gray-600">
                        Academic excellence and formal training
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Universidad Panamericana
                            </h3>
                            <div className="space-y-3 text-gray-700">
                                <p>
                                    <span className="font-medium">
                                        Digital Animation Engineer
                                    </span>{" "}
                                    – GPA 10/10, Summa Cum Laude
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Graphic Simulation Specialty
                                    </span>{" "}
                                    – GPA 10/10, Summa Cum Laude
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Certifications & Publications
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i
                                        data-feather="award"
                                        className="w-5 h-5 text-blue-500 mr-3 mt-1"
                                    ></i>
                                    <span className="text-gray-600">
                                        C++ Certified Associate Programmer
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <i
                                        data-feather="file-text"
                                        className="w-5 h-5 text-blue-500 mr-3 mt-1"
                                    ></i>
                                    <span className="text-gray-600">
                                        Thoughts and Emotion Assimilation and
                                        Detonation through VR for People With
                                        ASD (Hernandez-Mosti, et al., 2018)
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
