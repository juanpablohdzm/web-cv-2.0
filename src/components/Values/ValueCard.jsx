function ValueCard({title, description, icon}) {
    return (
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather={icon}></i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">{title}</h4>

            <p className="font-normal text-gray-500 text-md">{description}</p>
        </div>
    );
}

export default ValueCard;