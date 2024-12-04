import Tag from "./Tag";

function ProjectCard({identifier, title, description, tools}) {
    return (
    <div className="flex space-x-6">
        <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">{identifier}</h1>

        <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

        <div>
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">{title}</h1>

            <p className="font-normal text-gray-500 text-sm md:text-base">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {tools.map((tool, index) => (
                    <Tag key={index} text={tool}/>
                ))}
            </div>
        </div>
    </div>);
}

export default ProjectCard;