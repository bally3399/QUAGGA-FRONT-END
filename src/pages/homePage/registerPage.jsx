import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const RegisterPage = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        // address: '',
        // LGA: '',
        // state: '',
        // phoneNumber: '',
        agree: false,
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        let formErrors = {};

        for (let key in form) {
            if (form[key] === '') {
                formErrors[key] = 'This field is required';
            }
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            navigate('/login');
        }
    };

    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#eeffff] relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="bg-[#eeffff] w-full max-w-md p-8  shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign up as a Client or Professional</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            sx={roundedStyle}
                            error={!!errors.firstname}
                            helperText={errors.firstname}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                            sx={roundedStyle}
                            error={!!errors.lastname}
                            helperText={errors.lastname}
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
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            sx={roundedStyle}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            sx={roundedStyle}
                        />
                    </div>
                    {/*<div className="mb-4">*/}
                    {/*    <TextField*/}
                    {/*        label="Address"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        name="address"*/}
                    {/*        value={form.address}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        error={!!errors.address}*/}
                    {/*        helperText={errors.address}*/}
                    {/*        sx={roundedStyle}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="mb-4">*/}
                    {/*    <TextField*/}
                    {/*        label="LGA"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        name="LGA"*/}
                    {/*        value={form.LGA}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        error={!!errors.LGA}*/}
                    {/*        helperText={errors.LGA}*/}
                    {/*        sx={roundedStyle}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="mb-4">*/}
                    {/*    <TextField*/}
                    {/*        label="State"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        name="state"*/}
                    {/*        value={form.state}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        sx={roundedStyle}*/}
                    {/*        error={!!errors.state}*/}
                    {/*        helperText={errors.state}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="mb-4">*/}
                    {/*    <TextField*/}
                    {/*        label="Phone Number"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        name="phoneNumber"*/}
                    {/*        value={form.phoneNumber}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        error={!!errors.phoneNumber}*/}
                    {/*        helperText={errors.phoneNumber}*/}
                    {/*        sx={roundedStyle}*/}
                    {/*    />*/}
                    {/*</div>*/}
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
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
