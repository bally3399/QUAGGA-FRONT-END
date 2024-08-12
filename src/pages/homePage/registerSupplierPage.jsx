import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import {
    Button, Checkbox, FormControlLabel, TextField, MenuItem, Select, InputLabel, FormControl
} from "@mui/material";
import axios from "axios";

const RegisterSupplierPage = () => {
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
        // companyName: '',
        // category: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const handleRegister = () => {
        navigate('/login');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'

            }
        };

        try {
            const response = await axios.post('http://localhost:8080/api/v1/quagga/client/register', form, config);
            console.log("Response --> ", response);
            if (response.data.success) {
                console.log(response.data, 'Registration successful');
            }
        } catch (error) {
            console.error("Error during registration:", error);
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
                    onClick={() => navigate('/signUp')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="bg-[#eeffff] w-full max-w-md p-8  shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-[#093c5e]">Sign up as a Supplier</h2>
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
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            sx={roundedStyle}
                            error={!!errors.email}
                            helperText={errors.email}
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
                            sx={roundedStyle}
                            error={!!errors.password}
                            helperText={errors.password}
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
                            sx={roundedStyle}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
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
                    {/*        sx={roundedStyle}*/}
                    {/*        error={!!errors.address}*/}
                    {/*        helperText={errors.address}*/}
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
                    {/*        sx={roundedStyle}*/}
                    {/*        error={!!errors.LGA}*/}
                    {/*        helperText={errors.LGA}*/}
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
                    {/*        sx={roundedStyle}*/}
                    {/*        error={!!errors.phoneNumber}*/}
                    {/*        helperText={errors.phoneNumber}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="mb-4">*/}
                    {/*    <TextField*/}
                    {/*        label="Company Name"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        name="companyName"*/}
                    {/*        value={form.companyName}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        sx={roundedStyle}*/}
                    {/*        error={!!errors.companyName}*/}
                    {/*        helperText={errors.companyName}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="mb-4">*/}
                    {/*    <FormControl fullWidth variant="outlined" sx={roundedStyle}>*/}
                    {/*        <InputLabel>Category</InputLabel>*/}
                    {/*        <Select*/}
                    {/*            name="category"*/}
                    {/*            value={form.category}*/}
                    {/*            onChange={handleChange}*/}
                    {/*            label="Category"*/}
                    {/*            error={!!errors.category}*/}
                    {/*        >*/}
                    {/*            <MenuItem value=""><em>None</em></MenuItem>*/}
                    {/*            <MenuItem value="category1">STRUCTURAL</MenuItem>*/}
                    {/*            <MenuItem value="category2">MECHANICAL</MenuItem>*/}
                    {/*            <MenuItem value="category3">ELECTRICAL</MenuItem>*/}
                    {/*            <MenuItem value="category4">FINISHING</MenuItem>*/}
                    {/*            <MenuItem value="category5">EXTERIOR</MenuItem>*/}
                    {/*            <MenuItem value="category6">SITE_WORK</MenuItem>*/}
                    {/*            <MenuItem value="category7">SPECIALIZED</MenuItem>*/}
                    {/*            <MenuItem value="category8">INTERIOR</MenuItem>*/}
                    {/*            <MenuItem value="category9">ENVIRONMENTAL_SYSTEMS</MenuItem>*/}
                    {/*            <MenuItem value="category10">RENOVATION</MenuItem>*/}
                    {/*            <MenuItem value="category11">MARINE</MenuItem>*/}
                    {/*            <MenuItem value="category12">HEAVY_CONSTRUCTION</MenuItem>*/}
                    {/*            <MenuItem value="category13">SPECIALTY_CONTRACTORS</MenuItem>*/}
                    {/*            <MenuItem value="category14">LOGISTICS_AND_SUPPORT</MenuItem>*/}
                    {/*            <MenuItem value="category15">FABRICATION</MenuItem>*/}
                    {/*            <MenuItem value="category16">AGRICULTURAL_CONSTRUCTION</MenuItem>*/}
                    {/*            <MenuItem value="category17">ENTERTAINMENT</MenuItem>*/}
                    {/*            <MenuItem value="category18">MAINTENANCE</MenuItem>*/}
                    {/*            <MenuItem value="category19">RENEWABLE_ENERGY</MenuItem>*/}
                    {/*            <MenuItem value="category20">SPECIALTY_FLOORING</MenuItem>*/}
                    {/*            <MenuItem value="category21">SECURITY_AND_SAFETY</MenuItem>*/}
                    {/*            <MenuItem value="category22">FINISHES_AND_DECORATIONS</MenuItem>*/}
                    {/*            <MenuItem value="category23">LOW_VOLTAGE_SYSTEMS</MenuItem>*/}
                    {/*            <MenuItem value="category24">LIGHTING</MenuItem>*/}
                    {/*            <MenuItem value="category25">MISCELLANEOUS</MenuItem>*/}
                    {/*        </Select>*/}
                    {/*        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}*/}
                    {/*    </FormControl>*/}
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
                                backgroundColor: '#007e82',
                                color: 'white',
                                paddingY: 2,
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: '#007e82',
                                },
                            }}
                            onClick={handleRegister}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterSupplierPage;
