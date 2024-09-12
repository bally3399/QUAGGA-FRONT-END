

const Card = ({ iconColor, bgColor, percentage, count, label }) => (
    <a className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
        <div className="p-5">
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <div className={`rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm ${bgColor}`}>
                    <span className="flex items-center">{percentage}</span>
                </div>
            </div>
            <div className="ml-2 w-full flex-1">
                <div>
                    <div className="mt-3 text-3xl font-bold leading-8">{count}</div>
                    <div className="mt-1 text-base text-gray-600">{label}</div>
                </div>
            </div>
        </div>
    </a>
);
export default Card;