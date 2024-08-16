import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";

const ProfileForm = () => {
    const [isAvailableToHire, setIsAvailableToHire] = useState(true);
    const [isAccountPrivate, setIsAccountPrivate] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100">
            <div className='p-4'>
                <button
                    onClick={() => navigate('/profile')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >

                    <HiArrowLeft className="mr-2"/> Back
                </button>
            </div>
            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav className="space-y-1">
                                <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md">
                                    <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19a1.5 1.5 0 01-2.121-2.121l1.414-1.414A2 2 0 004.93 14.07l-1.414 1.414a1.5 1.5 0 01-2.121-2.121l1.414-1.414A2 2 0 004.93 8.07L3.515 6.657a1.5 1.5 0 112.121-2.121l1.415 1.414a2 2 0 002.83 0l1.414-1.414a1.5 1.5 0 112.121 2.121L14.071 6.93a2 2 0 000 2.828l1.414 1.414a1.5 1.5 0 11-2.121 2.121l-1.415-1.414a2 2 0 00-2.828 0l-1.414 1.414a1.5 1.5 0 01-2.121 2.121L5.121 19z" />
                                    </svg>
                                    Profile
                                </a>
                                <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                                    <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14h6m2 0a9 9 0 10-18 0 9 9 0 0018 0zm0 0H9" />
                                    </svg>
                                    Account
                                </a>
                                <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                                    <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    Password
                                </a>
                                <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                                    <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V4M4 4h16v16H4z" />
                                    </svg>
                                    Notifications
                                </a>
                            </nav>
                        </aside>

                        <div className="divide-y divide-gray-200 lg:col-span-9">
                            <form className="py-6 px-4 sm:p-6 lg:pb-8" action="#" method="POST">
                                <div>
                                    <h2 className="text-lg font-medium leading-6 text-gray-900">Profile</h2>
                                    <p className="mt-1 text-sm text-gray-500">This information will be displayed
                                        publicly so be careful what you share.</p>
                                </div>

                                <div className="mt-6 flex flex-col lg:flex-row">
                                    <div className="flex-grow space-y-6">
                                        <div>
                                            <label htmlFor="username"
                                                className="block text-sm font-medium text-gray-700">Username</label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span
                                                    className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">quagga.com/</span>
                                                <input type="text" name="username" id="username" autoComplete="username"
                                                    className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                                    defaultValue="deblewis" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="about"
                                                className="block text-sm font-medium text-gray-700">About</label>
                                            <div className="mt-1">
                                                <textarea id="about" name="about" rows="3"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"></textarea>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">Brief description for your
                                                profile. URLs are hyperlinked.</p>
                                        </div>
                                    </div>


                                    <div className="relative hidden overflow-hidden rounded-full lg:block">
                                        <img className="relative h-40 w-40 rounded-full"
                                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                            alt="" />
                                        <label htmlFor="desktop-user-photo"
                                            className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100">
                                            <span>Change</span>
                                            <input type="file" id="desktop-user-photo" name="user-photo"
                                                className="absolute inset-0 h-full w-full cursor-pointer rounded-full border-gray-300 opacity-0" />
                                        </label>

                                        <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                                            <p className="text-sm font-medium text-gray-700"
                                                aria-hidden="true">Photo</p>
                                            <div className="mt-1 lg:hidden">
                                                <div className="flex items-center">
                                                    <div
                                                        className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                                        aria-hidden="true">
                                                        <img className="h-full w-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                                            alt="" />
                                                    </div>
                                                    <div className="ml-5 rounded-md shadow-sm">
                                                        <div
                                                            className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                                                            <label htmlFor="mobile-user-photo"
                                                                className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700">
                                                                <span>Change</span>
                                                            </label>
                                                            <input id="mobile-user-photo" name="user-photo" type="file"
                                                                className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="divide-y divide-gray-200 pt-6">
                                    <div className="mt-6 grid grid-cols-12 gap-6">
                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="first-name"
                                                className="block text-sm font-medium text-gray-700">First
                                                name</label>
                                            <input type="text" name="first-name" id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                        </div>

                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700">Last name</label>
                                            <input type="text" name="last-name" id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="url"
                                                className="block text-sm font-medium text-gray-700">URL</label>
                                            <input type="text" name="url" id="url"
                                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                        </div>

                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="company"
                                                className="block text-sm font-medium text-gray-700">Company</label>
                                            <input type="text" name="company" id="company" autoComplete="organization"
                                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                        </div>
                                    </div>


                                    <div className="px-4 sm:px-6">
                                        <div>
                                            <h2 className="pt-2 text-lg font-medium leading-6 text-gray-900">Privacy</h2>

                                        </div>
                                        <ul role="list" className="mt-2 divide-y divide-gray-200">
                                            <li className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-gray-900"
                                                        id="privacy-option-1-label">Available to hire</p>
                                                    <p className="text-sm text-gray-500"
                                                        id="privacy-option-1-description">confirm availability to work</p>
                                                </div>
                                                <button type="button"
                                                    className={`bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${isAvailableToHire ? 'bg-teal-500' : 'bg-gray-200'}`}
                                                    role="switch" aria-checked={isAvailableToHire}
                                                    aria-labelledby="privacy-option-1-label"
                                                    aria-describedby="privacy-option-1-description"
                                                    onClick={() => setIsAvailableToHire(!isAvailableToHire)}>
                                                    <span aria-hidden="true"
                                                        className={`translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAvailableToHire ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                                </button>
                                            </li>
                                            <li className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-gray-900"
                                                        id="privacy-option-2-label">Make account private</p>
                                                    <p className="text-sm text-gray-500"
                                                        id="privacy-option-2-description">Temporary hide account from others</p>
                                                </div>
                                                <button type="button"
                                                    className={`bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${isAccountPrivate ? 'bg-teal-500' : 'bg-gray-200'}`}
                                                    role="switch" aria-checked={isAccountPrivate}
                                                    aria-labelledby="privacy-option-2-label"
                                                    aria-describedby="privacy-option-2-description"
                                                    onClick={() => setIsAccountPrivate(!isAccountPrivate)}>
                                                    <span aria-hidden="true"
                                                        className={`translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAccountPrivate ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="mt-4 flex justify-end pt-6">
                                        <button type="button"
                                            className="mr-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Cancel
                                        </button>
                                        <button type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
        ;
}

export default ProfileForm
