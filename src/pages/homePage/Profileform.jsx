import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

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
                    <HiArrowLeft className="mr-2" /> Back
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
                                    <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                                </div>

                                <div className="mt-6 flex flex-col lg:flex-row">
                                    <div className="flex-grow space-y-6">
                                        <div>
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                            <div className="mt-1 mr-10 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">quagga.com/</span>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    autoComplete="username"
                                                    className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                                    defaultValue="user name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
                                            <div className="mt-1 mr-10">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows="3"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm">
                                                </textarea>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                                        </div>
                                    </div>

                                    <div className="relative hidden overflow-hidden rounded-full lg:block">

                                        <div className="relative mt-6 hidden overflow-hidden rounded-full lg:block">
                                            <img
                                                className="relative h-40 w-40 rounded-full"
                                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                                alt=""
                                            />
                                            <label
                                                htmlFor="desktop-user-photo"
                                                className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                                            >
                                                <span>Change</span>
                                                <input
                                                    type="file"
                                                    id="desktop-user-photo"
                                                    name="user-photo"
                                                    className="absolute inset-0 h-full w-full cursor-pointer rounded-full border-gray-300 opacity-0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="pt-6 divide-y divide-gray-200">
                                    <div className="mt-6">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">Bio</label>
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows="3"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm">
                                        </textarea>
                                    </div>
                                </div>

                                <div className="pt-6 divide-y divide-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-medium text-gray-900">Settings</h2>
                                        <p className="text-sm text-gray-500">Manage your public profile and account settings</p>
                                    </div>

                                    <fieldset className="mt-6">
                                        <legend className="text-sm font-medium text-gray-900">Job Preferences</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="relative flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="available-to-hire"
                                                        name="available-to-hire"
                                                        type="checkbox"
                                                        checked={isAvailableToHire}
                                                        onChange={() => setIsAvailableToHire(!isAvailableToHire)}
                                                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="available-to-hire" className="font-medium text-gray-700">Available to hire</label>
                                                    <p className="text-gray-500">Whether you're available for freelance opportunities or full-time work.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="mt-6">
                                        <legend className="text-sm font-medium text-gray-900">Privacy Settings</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="relative flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="account-private"
                                                        name="account-private"
                                                        type="checkbox"
                                                        checked={isAccountPrivate}
                                                        onChange={() => setIsAccountPrivate(!isAccountPrivate)}
                                                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="account-private" className="font-medium text-gray-700">Account private</label>
                                                    <p className="text-gray-500">Your profile will be hidden and only visible to people you share the link with.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfileForm;

