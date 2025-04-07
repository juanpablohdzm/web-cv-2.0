import {useEffect} from "react";
import feather from "feather-icons";


function ContactSection() {
    useEffect(() => {
        feather.replace();
    }, []);
    return(
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
                        href="mailto:mosti.dev@gmail.com"
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
    );
}


export default ContactSection;