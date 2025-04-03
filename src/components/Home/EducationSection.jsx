import {useEffect} from "react";
import feather from "feather-icons";

function EducationSection() {
    useEffect(() => {
        feather.replace();
    }, []);
    return(
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
    );
}

export default EducationSection;