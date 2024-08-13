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
    });


    const navigate = useNavigate();
    const [errors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
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
            const response = await axios.post('http://localhost:8080/api/v1/quagga/client/login', form, config);

            if (response.data.successful) {
                toast.success(`Welcome ${form.firstName}, you have logged in successfully!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    agree: false,
                });

                setTimeout(() => {
                    navigate("/dashBoard");
                }, 3000);
            } else {
                toast.error('Sign up failed. Please try again.', {
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
                    icon: ({theme, type}) => <HiExclamationCircle style={{fontSize: '20px'}}/>, // Custom icon with reduced size
                });

            }
        }catch (error) {
            console.error('Error during sign up:', error);
            toast.error('Sign up failed. Please try again.', {
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
                icon: ({theme, type}) => <HiExclamationCircle style={{fontSize: '20px'}}/>,
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
        <div className="bg-[#eeffff] flex justify-center items-center min-h-screen  relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/signUp')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
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
    );
};

export default LoginPage;
