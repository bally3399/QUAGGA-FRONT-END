
import Navbar from "../../component/navbar/Navbar";
import {useLocation, useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import React from "react";

const Profile =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;
    return (
        <div className="min-h-screen bg-gray-100">
            <div className='p-4'>
            </div>
                <Navbar />
            <div className='bg-[#eeffff] pt-16'>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-8">
                        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                            <div className="col-span-4 sm:col-span-3">
                                <div className="bg-white shadow rounded-lg p-6">
                                    <div className="flex flex-col items-center">


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
                                        <h1 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h1>
                                        <p className="text-gray-700">{user?.role}</p>

                                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                            <a href="#"
                                               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                            <a href="/profile-form"
                                               className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Edit
                                                Profile</a>
                                            <button
                                                onClick={() => navigate('/dashBoard')}
                                                className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                                            >
                                                <HiArrowLeft className="mr-2"/> Back
                                            </button>

                                        </div>
                                    </div>
                                    <hr className="my-6 border-t border-gray-300"/>
                                    <div className="flex flex-col">
                                        <span
                                            className="text-gray-700 uppercase font-bold tracking-wider mb-2">Catagory</span>
                                    <ul>
                                        <li className="mb-2">Electrical</li>
                                        {/*<li className="mb-2">React</li>*/}
                                        {/*<li className="mb-2">Node.js</li>*/}
                                        {/*<li className="mb-2">HTML/CSS</li>*/}
                                        {/*<li className="mb-2">Tailwind Css</li>*/}
                                    </ul>
                                    <span
                                        className="text-gray-700 uppercase font-bold tracking-wider mb-2">Sub-Category</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <label htmlFor="about"></label>
                                <div className="mt-1">
                                        <textarea id="about" name="about" rows="3"
                                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"></textarea>
                                </div>
                                    <p className="mt-2 text-sm text-gray-500">Tell us about yourself</p>

                                    <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                                    <div className="mb-6">
                                        <label htmlFor="experience"></label>
                                        <div className="mt-1">
                                            <textarea id="about" name="about" rows="3"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Tell us about your experience</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;