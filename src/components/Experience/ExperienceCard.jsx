import Tag from "../Utilities/Tag";

function ExperienceCard({company, title, time, tags}) {
    return (
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h2 className="font-semibold text-gray-700 text-2xl mb-4">{company}</h2>
            <h2 className="font-semibold text-gray-700 text-2xl mb-4">{title}</h2>
            <h4 className="font-medium text-gray-700 text-lg mb-4">{time}</h4>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => <Tag key={index} text={tag}/>)}
            </div>
        </div>
    );
}

export default ExperienceCard;