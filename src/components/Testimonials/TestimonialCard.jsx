import { useRef, useState, useEffect } from "react";

function TestimonialCard({ title, description, company }) {
    const contentRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [showFull, setShowFull] = useState(false);

    useEffect(() => {
        const el = contentRef.current;
        if (el) {
            setIsOverflowing(el.scrollHeight > el.clientHeight);
        }
    }, [description]);

    return (
        <>
            <div className="relative bg-white h-[300px] max-w-[500px] shadow-xl rounded-xl p-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between">
                <div className="w-full h-full overflow-hidden" ref={contentRef}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                    <p
                        className={`text-gray-700 mb-6 leading-relaxed ${
                            isOverflowing ? 'line-clamp-[6]' : ''
                        }`}
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: isOverflowing ? 6 : 'unset',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {description}
                    </p>
                    <p className="text-gray-500 italic text-right">- {company}</p>
                </div>

                {isOverflowing && (
                    <button
                        onClick={() => setShowFull(true)}
                        className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                        aria-label="Expand full testimonial"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                )}
            </div>

            {showFull && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto relative">
                        <button
                            onClick={() => setShowFull(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-gray-700"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">{description}</p>
                        <p className="text-gray-500 italic text-right">- {company}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default TestimonialCard;
