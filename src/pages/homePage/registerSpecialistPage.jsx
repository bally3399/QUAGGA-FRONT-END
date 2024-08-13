import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiExclamationCircle } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const RegisterSpecialistPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: localStorage.getItem("role"),
        agree: false,
    });

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
            const response = await axios.post('http://localhost:8080/api/v1/quagga/specialist/register', form, config);

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
            borderRadius: '9999px',
        },
    };

    return (
        <div className="flex justify-center items-center min-h-screen  bg-[#eeffff] relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="bg-[#eeffff] w-full max-w-md p-8 shadow-md rounded-lg">
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
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: '#093c5e',
                                },
                            }}
                        >
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </Button>
                    </div>
                </form>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default RegisterSpecialistPage;
// {/*<div className="mb-4">*/}
// {/*    <FormControl fullWidth variant="outlined" sx={roundedStyle} error={!!errors.category}>*/}
// {/*        <InputLabel>Category</InputLabel>*/}
// {/*        <Select*/}
// {/*            name="category"*/}
// {/*            value={form.category}*/}
// {/*            onChange={handleChange}*/}
// {/*            label="Category"*/}
// {/*        >*/}
// {/*            <MenuItem value=""><em>None</em></MenuItem>*/}
// {/*            <MenuItem value="category1">STRUCTURAL</MenuItem>*/}
// {/*            <MenuItem value="category2">MECHANICAL</MenuItem>*/}
// {/*            <MenuItem value="category3">ELECTRICAL</MenuItem>*/}
// {/*            <MenuItem value="category4">FINISHING</MenuItem>*/}
// {/*            <MenuItem value="category5">EXTERIOR</MenuItem>*/}
// {/*            <MenuItem value="category6">SITE_WORK</MenuItem>*/}
// {/*            <MenuItem value="category7">SPECIALIZED</MenuItem>*/}
// {/*            <MenuItem value="category8">INTERIOR</MenuItem>*/}
// {/*            <MenuItem value="category9">ENVIRONMENTAL_SYSTEMS</MenuItem>*/}
// {/*            <MenuItem value="category10">RENOVATION</MenuItem>*/}
// {/*            <MenuItem value="category11">MARINE</MenuItem>*/}
// {/*            <MenuItem value="category12">HEAVY_CONSTRUCTION</MenuItem>*/}
// {/*            <MenuItem value="category13">SPECIALTY_CONTRACTORS</MenuItem>*/}
// {/*            <MenuItem value="category14">LOGISTICS_AND_SUPPORT</MenuItem>*/}
// {/*            <MenuItem value="category15">FABRICATION</MenuItem>*/}
// {/*            <MenuItem value="category16">AGRICULTURAL_CONSTRUCTION</MenuItem>*/}
// {/*            <MenuItem value="category17">ENTERTAINMENT</MenuItem>*/}
// {/*            <MenuItem value="category18">MAINTENANCE</MenuItem>*/}
// {/*            <MenuItem value="category19">RENEWABLE_ENERGY</MenuItem>*/}
// {/*            <MenuItem value="category20">SPECIALTY_FLOORING</MenuItem>*/}
// {/*            <MenuItem value="category21">SECURITY_AND_SAFETY</MenuItem>*/}
// {/*            <MenuItem value="category22">FINISHES_AND_DECORATIONS</MenuItem>*/}
// {/*            <MenuItem value="category23">LOW_VOLTAGE_SYSTEMS</MenuItem>*/}
// {/*            <MenuItem value="category24">LIGHTING</MenuItem>*/}
// {/*            <MenuItem value="category25">MISCELLANEOUS</MenuItem>*/}
// {/*        </Select>*/}
// {/*        <FormHelperText>{errors.category}</FormHelperText>*/}
// {/*    </FormControl>*/}
// {/*</div>*/}
// {/*<div className="mb-4">*/}
// {/*    <FormControl fullWidth variant="outlined" sx={roundedStyle} error={!!errors.subCategory}>*/}
// {/*        <InputLabel>Sub Category</InputLabel>*/}
// {/*        <Select*/}
// {/*            name="subCategory"*/}
// {/*            value={form.subCategory}*/}
// {/*            onChange={handleChange}*/}
// {/*            label="Sub Category"*/}
// {/*        >*/}
// {/*            <MenuItem value=""><em>None</em></MenuItem>*/}
// {/*            <MenuItem value="subCategory1">WOODWORKING</MenuItem>*/}
// {/*            <MenuItem value="subCategory2">PAINTING</MenuItem>*/}
// {/*            <MenuItem value="subCategory3">DEMOLITION</MenuItem>*/}
// {/*            <MenuItem value="subCategory4">GLASSWORK</MenuItem>*/}
// {/*            <MenuItem value="subCategory5">LANDSCAPING</MenuItem>*/}
// {/*            <MenuItem value="subCategory6">CONCRETE</MenuItem>*/}
// {/*            <MenuItem value="subCategory7">PAVING</MenuItem>*/}
// {/*            <MenuItem value="subCategory8">PLUMBING</MenuItem>*/}
// {/*            <MenuItem value="subCategory9">HVAC</MenuItem>*/}
// {/*            <MenuItem value="subCategory10">ROOFING</MenuItem>*/}
// {/*            <MenuItem value="subCategory11">CARPENTRY</MenuItem>*/}
// {/*            <MenuItem value="subCategory12">MASONRY</MenuItem>*/}
// {/*            <MenuItem value="subCategory13">WATER_PROOFING</MenuItem>*/}
// {/*            <MenuItem value="subCategory14">INSULATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory15">TILING</MenuItem>*/}
// {/*            <MenuItem value="subCategory16">ELECTRICAL_INSTALLATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory17">STEELWORK</MenuItem>*/}
// {/*            <MenuItem value="subCategory18">FIRE_PROTECTION</MenuItem>*/}
// {/*            <MenuItem value="subCategory19">SECURITY_SYSTEMS</MenuItem>*/}
// {/*            <MenuItem value="subCategory20">INTERIOR_FINISHING</MenuItem>*/}
// {/*            <MenuItem value="subCategory21">EXTERIOR_FINISHING</MenuItem>*/}
// {/*            <MenuItem value="subCategory22">WINDOWS_AND_DOORS</MenuItem>*/}
// {/*            <MenuItem value="subCategory23">SIGNAGE</MenuItem>*/}
// {/*            <MenuItem value="subCategory24">COMMUNICATION_SYSTEMS</MenuItem>*/}
// {/*            <MenuItem value="subCategory25">POWER_GENERATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory26">ELEVATORS_AND_ESCALATORS</MenuItem>*/}
// {/*            <MenuItem value="subCategory27">FABRICATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory28">CLEANING</MenuItem>*/}
// {/*            <MenuItem value="subCategory29">PEST_CONTROL</MenuItem>*/}
// {/*            <MenuItem value="subCategory30">WASTE_MANAGEMENT</MenuItem>*/}
// {/*            <MenuItem value="subCategory31">SOLAR_INSTALLATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory32">EV_CHARGING_STATIONS</MenuItem>*/}
// {/*            <MenuItem value="subCategory33">ENERGY_EFFICIENT_LIGHTING</MenuItem>*/}
// {/*            <MenuItem value="subCategory34">RAINWATER_HARVESTING</MenuItem>*/}
// {/*            <MenuItem value="subCategory35">ECO_FRIENDLY_MATERIALS</MenuItem>*/}
// {/*            <MenuItem value="subCategory36">GREEN_ROOFING</MenuItem>*/}
// {/*            <MenuItem value="subCategory37">LANDSCAPE_DESIGN</MenuItem>*/}
// {/*            <MenuItem value="subCategory38">HARDSCAPING</MenuItem>*/}
// {/*            <MenuItem value="subCategory39">IRRIGATION_SYSTEMS</MenuItem>*/}
// {/*            <MenuItem value="subCategory40">DRAINAGE_SOLUTIONS</MenuItem>*/}
// {/*            <MenuItem value="subCategory41">LAND_CLEARING</MenuItem>*/}
// {/*            <MenuItem value="subCategory42">TREE_CARE</MenuItem>*/}
// {/*            <MenuItem value="subCategory43">FENCING</MenuItem>*/}
// {/*            <MenuItem value="subCategory44">WALL_CONSTRUCTION</MenuItem>*/}
// {/*            <MenuItem value="subCategory45">EARTHWORK</MenuItem>*/}
// {/*            <MenuItem value="subCategory46">FLOORING</MenuItem>*/}
// {/*            <MenuItem value="subCategory47">CEILING_WORK</MenuItem>*/}
// {/*            <MenuItem value="subCategory48">PARTITIONING</MenuItem>*/}
// {/*            <MenuItem value="subCategory49">CABINETRY</MenuItem>*/}
// {/*            <MenuItem value="subCategory50">INTERIOR_DECORATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory51">EXTERIOR_DECORATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory52">LIGHTING_INSTALLATION</MenuItem>*/}
// {/*            <MenuItem value="subCategory53">CURTAIN_WALLING</MenuItem>*/}
// {/*            <MenuItem value="subCategory54">EXTERIOR_CLADDING</MenuItem>*/}
// {/*            <MenuItem value="subCategory55">INSULATION</MenuItem>*/}
// {/*        </Select>*/}
// {/*        <FormHelperText>{errors.subCategory}</FormHelperText>*/}
// {/*    </FormControl>*/}
// {/*</div>*/}
//
