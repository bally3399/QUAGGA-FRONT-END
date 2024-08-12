import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {HiUser, HiBriefcase, HiArrowLeft} from 'react-icons/hi';

const SignUpPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleCreateAccount = () => {
        if (selectedRole === 'client' || selectedRole === 'Professional') navigate('/registerClient/prof')
        else if (selectedRole === 'Specialist') navigate('/registerSpecialist')
        else if(selectedRole === 'Supplier') navigate('/registerSupplier')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#eeffff] relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2"/> Back
                </button>
            </div>
            <h1 className="text-3xl font-semibold mb-6 text-[#093c5e]">Join as a Client, Professional, Specialist or Supplier</h1>
            <div className="flex space-x-4 mb-6">
                <div
                    className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'client' ? 'border-[#093c5e]' : 'border-[#093c5e]'}`}
                    onClick={() => handleRoleSelect('client')}
                >
                    <HiBriefcase className="text-3xl mb-2"/>
                    <p className="text-lg font-medium">I'm a client</p>
                    <input type="radio" checked={selectedRole === 'client'} onChange={() => handleRoleSelect('client')}
                           className="mt-2"/>
                </div>
                <div
                    className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'Professional' ? 'border-[#093c5e]' : 'border-[#093c5e]'}`}
                    onClick={() => handleRoleSelect('Professional')}
                >
                    <HiUser className="text-3xl mb-2"/>
                    <p className="text-lg font-medium">I'm a Professional</p>
                    <input type="radio" checked={selectedRole === 'Professional'}
                           onChange={() => handleRoleSelect('Professional')} className="mt-2"/>
                </div>
                <div
                    className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'Supplier' ? 'border-[#093c5e]' : 'border-[#093c5e]'}`}
                    onClick={() => handleRoleSelect('Supplier')}
                >
                    <HiUser className="text-3xl mb-2"/>
                    <p className="text-lg font-medium">I'm a Supplier</p>
                    <input type="radio" checked={selectedRole === 'Supplier'}
                           onChange={() => handleRoleSelect('Supplier')} className="mt-2"/>
                </div>
                <div
                    className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'Specialist' ? 'border-[#093c5e]' : 'border-[#093c5e]'}`}
                    onClick={() => handleRoleSelect('Specialist')}
                >
                    <HiUser className="text-3xl mb-2"/>
                    <p className="text-lg font-medium">I'm a Specialist</p>
                    <input type="radio" checked={selectedRole === 'Specialist'}
                           onChange={() => handleRoleSelect('Specialist')} className="mt-2"/>
                </div>
            </div>
            <button
                className={`px-6 py-3 rounded-lg font-medium ${selectedRole ? 'bg-[#06324e] text-white hover:bg-[#06324e]' : 'bg-[#007e82] text-gray-500 cursor-not-allowed'}`}
                onClick={handleCreateAccount}
                disabled={!selectedRole}
            >
                Create Account
            </button>
            <p className="mt-4">
                Already have an account?{' '}
                <a href="/login" className="text-[#06324e] hover:underline">
                    Log In
                </a>
            </p>
        </div>
    );
};

export default SignUpPage;
