function TestimonialCard({ title, description, company }) {
    return (
        <div className="bg-white shadow-xl rounded-xl p-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <p className="text-gray-500 italic text-right">- {company}</p>
        </div>
    );
}

export default TestimonialCard;