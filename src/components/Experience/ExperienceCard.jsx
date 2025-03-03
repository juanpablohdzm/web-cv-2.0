import Tag from "../Utilities/Tag";
import feather from "feather-icons";
import { useEffect } from "react";

function ExperienceCard({ company, title, time, tags, fileUrl }) {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col h-full min-h-[300px] text-center">
            <div className="flex-grow">
                <h2 className="font-semibold text-gray-700 text-2xl mb-4">{company}</h2>
                <h2 className="font-semibold text-gray-700 text-2xl mb-4">{title}</h2>
                <h4 className="font-medium text-gray-700 text-lg mb-4">{time}</h4>

                <div className="flex flex-wrap my-10 gap-2 justify-center">
                    {tags.map((tag, index) => <Tag key={index} text={tag} />)}
                </div>
            </div>

            {fileUrl && (
                <a
                    href={fileUrl}
                    download
                    className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition flex items-center gap-2 justify-center"
                >
                    <i data-feather="download"></i>
                    <span>Recommendation Letter</span>
                </a>
            )}
        </div>
    );
}

export default ExperienceCard;
