import React, { useState } from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel, Select, MenuItem, FormHelperText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {HiArrowLeft, HiExclamationCircle, HiEye, HiEyeOff} from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const RegisterSupplierPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: localStorage.getItem("role"),
        agree: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (form.password !== form.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match";
        }
        if (!form.agree) {
            formErrors.agree = "You must agree to the terms and conditions";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post('https://quagga.onrender.com/api/v1/quagga/supplier/register', form, config);

            if (response.data.successful) {
                toast.success(`Welcome ${form.firstName}, you have signed up successfully!`, {
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
                    navigate("/login");
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
            // borderRadius: '9999px',
        },
    };

    return (
        <div className="flex justify-center items-center min-h-screen  bg-[#ffffff] relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/signUp')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="bg-[#ffffff] w-full max-w-md p-8 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            sx={roundedStyle}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            sx={roundedStyle}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                    </div>
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
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            sx={roundedStyle}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility}>
                                            {showPassword ? <HiEyeOff/> : <HiEye/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            sx={roundedStyle}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={toggleConfirmPasswordVisibility}>
                                            {showConfirmPassword ? <HiEyeOff/> : <HiEye/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <FormControl fullWidth variant="outlined" sx={roundedStyle} error={!!errors.category}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                name="category"
                                value={form.category || ""}
                                onChange={handleChange}
                                label="Category"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="STRUCTURAL">STRUCTURAL</MenuItem>
                                <MenuItem value="MECHANICAL">MECHANICAL</MenuItem>
                                <MenuItem value="ELECTRICAL">ELECTRICAL</MenuItem>
                                <MenuItem value="FINISHING">FINISHING</MenuItem>
                                <MenuItem value="EXTERIOR">EXTERIOR</MenuItem>
                                <MenuItem value="SITE_WORK">SITE_WORK</MenuItem>
                                <MenuItem value="SPECIALIZED">SPECIALIZED</MenuItem>
                                <MenuItem value="INTERIOR">INTERIOR</MenuItem>
                                <MenuItem value="ENVIRONMENTAL_SYSTEMS">ENVIRONMENTAL_SYSTEMS</MenuItem>
                                <MenuItem value="RENOVATION">RENOVATION</MenuItem>
                                <MenuItem value="MARINE">MARINE</MenuItem>
                                <MenuItem value="HEAVY_CONSTRUCTION">HEAVY_CONSTRUCTION</MenuItem>
                                <MenuItem value="SPECIALTY_CONTRACTORS">SPECIALTY_CONTRACTORS</MenuItem>
                                <MenuItem value="LOGISTICS_AND_SUPPORT">LOGISTICS_AND_SUPPORT</MenuItem>
                                <MenuItem value="FABRICATION">FABRICATION</MenuItem>
                                <MenuItem value="AGRICULTURAL_CONSTRUCTION">AGRICULTURAL_CONSTRUCTION</MenuItem>
                                <MenuItem value="ENTERTAINMENT">ENTERTAINMENT</MenuItem>
                                <MenuItem value="MAINTENANCE">MAINTENANCE</MenuItem>
                                <MenuItem value="RENEWABLE_ENERGY">RENEWABLE_ENERGY</MenuItem>
                                <MenuItem value="SPECIALTY_FLOORING">SPECIALTY_FLOORING</MenuItem>
                                <MenuItem value="SECURITY_AND_SAFETY">SECURITY_AND_SAFETY</MenuItem>
                                <MenuItem value="FINISHES_AND_DECORATIONS">FINISHES_AND_DECORATIONS</MenuItem>
                                <MenuItem value="LOW_VOLTAGE_SYSTEMS">LOW_VOLTAGE_SYSTEMS</MenuItem>
                                <MenuItem value="LIGHTING">LIGHTING</MenuItem>
                                <MenuItem value="MISCELLANEOUS">MISCELLANEOUS</MenuItem>
                            </Select>
                            {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
                        </FormControl>
                    </div>
                    <div className="mb-4">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="agree"
                                    checked={form.agree}
                                    onChange={handleChange}
                                    color="primary"
                                />
                            }
                            label="I agree to the terms and conditions"
                        />
                        {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
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
                                // borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: '#093c5e',
                                },
                            }}
                        >
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </Button>
                    </div>
                </form>
                <ToastContainer position="top-right" autoClose={3000}/>
            </div>
        </div>
    );
};

export default RegisterSupplierPage;
