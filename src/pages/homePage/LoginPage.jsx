import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HiArrowLeft, HiExclamationCircle} from "react-icons/hi";
import {Button, TextField} from "@mui/material";
import axios from "axios";
import {toast} from "react-toastify";

const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        role: localStorage.getItem("role"),
    });

    const navigate = useNavigate();
    const [errors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post('https://quagga.onrender.com/api/v1/quagga/client/login', form, config);
            console.log(response);
            if (response.data.successful) {
                const userResponse = response.data.userResponse;

                toast.success(`Welcome ${userResponse.firstName}, you have logged in successfully!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setForm({
                    email: '',
                    password: '',
                });

                localStorage.setItem("role", userResponse.role);
                localStorage.setItem("firstName", userResponse.firstName);
                localStorage.setItem("lastName", userResponse.lastName);

                setTimeout(() => {
                    const userRole = userResponse.role;

                    if (userRole === 'CLIENT' || userRole === 'PROFESSIONAL') {
                        navigate("/dashboard", { state: { user: userResponse } });
                    } else if (userRole === 'SUPPLIER') {
                        navigate("/supplierDashboard", { state: { user: userResponse } });
                    } else if (userRole === 'SPECIALIST') {
                        navigate("/specialistDashboard", { state: { user: userResponse } });
                    } else {
                        toast.error('Unrecognized role. Please contact support.', {
                            position: 'top-right',
                            autoClose: 3000,
                        });
                    }
                }, 3000);
            } else if (response.data.message === "Invalid username or password") {
                toast.error('Email does not exist. Please try and sign up.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        fontSize: '14px',
                    },
                    icon: ({ theme, type }) => <HiExclamationCircle style={{ fontSize: '20px' }} />,
                });
            } else {
                toast.error('Login failed. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        fontSize: '14px',
                    },
                    icon: ({ theme, type }) => <HiExclamationCircle style={{ fontSize: '20px' }} />,
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Login failed. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontSize: '14px',
                },
                icon: ({ theme, type }) => <HiExclamationCircle style={{ fontSize: '20px' }} />,
            });
        } finally {
            setIsLoading(false);
        }
    };


    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };

    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">

            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/signUp')}
                    className="flex items-center text-[#EEFFFF] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2"/> Back
                </button>
            </div>
            <section className="flex w-[30rem] flex-col space-y-10">
                <div
                    className=" mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white relative">

                    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={roundedStyle}
                                />
                            </div>
                            <div className="mb-4">
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    sx={roundedStyle}
                                />
                            </div>
                            <div className="mt-4 flex justify-end">
                                <Button
                                    onClick={() => navigate('/forgotPassword')}
                                    sx={{
                                        color: '#093c5e',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        alignItem: 'right'
                                    }}
                                >
                                    Forgot your password?
                                </Button>
                            </div>

                            <div className="mt-6">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={isLoading}
                                    sx={{
                                        backgroundColor: '#093c5e',
                                        color: 'white',
                                        paddingY: 2,
                                        borderRadius: '9999px',
                                        '&:hover': {
                                            backgroundColor: '#093c5e',
                                        },
                                    }}
                                >
                                    {isLoading ? 'Logging in...' : 'Login'}

                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default LoginPage;
