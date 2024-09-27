import React from 'react';

const ProfileItem = ({ href, iconPath, label, onClick }) => (
    <a href={href} className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
        <svg
            className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
        </svg>
        <li className="mb-1">
            <a onClick={onClick}>{label}</a>
        </li>
    </a>
);

export default ProfileItem;
