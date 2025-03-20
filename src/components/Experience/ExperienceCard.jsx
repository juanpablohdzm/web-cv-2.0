﻿import { useState } from "react";
import "./ExperienceCard.css";

function ExperienceCard({
    company,
    title,
    time,
    description,
    tags,
    fileUrl,
    videoUrls,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Card */}
            <div className="group bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                    {/* Icon - You can customize this based on the company */}
                    <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-4">
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
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>

                    {/* Video Button */}
                    {videoUrls && videoUrls.length > 0 && (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                            aria-label="View videos"
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

                {/* Content */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        {company}
                    </h3>
                    <h4 className="text-lg text-gray-700 mb-2">{title}</h4>
                    <p className="text-sm text-gray-500 mb-4">{time}</p>

                    {description && (
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {description}
                        </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-black/5 text-gray-700 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Recommendation Link */}
                    {fileUrl && (
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>
                            View Recommendation Letter
                        </a>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Panel */}
                    <div className="relative min-h-screen flex items-center justify-center p-4">
                        <div className="relative bg-white rounded-3xl max-w-4xl w-full mx-auto p-8">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
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

                            {/* Modal Content */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    {company} - Project Videos
                                </h2>
                                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 styled-scrollbar">
                                    {videoUrls.map((url, index) => (
                                        <div
                                            key={index}
                                            className="aspect-video rounded-2xl overflow-hidden bg-black/5"
                                        >
                                            <iframe
                                                src={url}
                                                title={`Video ${index + 1}`}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExperienceCard;
