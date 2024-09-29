import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import SupplierCard from "../supplierCard/supplierCard";
import ProductCard from "../productCard/ProductCard";

const KeywordsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [data, setData] = useState({ products: [], suppliers: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Corrected Error state
    const [productPage, setProductPage] = useState(1);
    const [supplierPage, setSupplierPage] = useState(1);
    const [currentKeyword, setCurrentKeyword] = useState("WOODWORKING");

    const navigate = useNavigate(); // To programmatically navigate

    const keywords = [
        "WOODWORKING", "PAINTING", "DEMOLITION", "GLASSWORK", "LANDSCAPING",
        "CONCRETE", "PAVING", "PLUMBING", "HVAC", "ROOFING",
        "CARPENTRY", "MASONRY", "WATER_PROOFING", "INSULATION", "TILING",
        "ELECTRICAL_INSTALLATION", "STEELWORK", "FIRE_PROTECTION", "SECURITY_SYSTEMS", "INTERIOR_FINISHING",
        "EXTERIOR_FINISHING", "WINDOWS_AND_DOORS", "SIGNAGE", "COMMUNICATION_SYSTEMS", "POWER_GENERATION",
        "ELEVATORS_AND_ESCALATORS", "FABRICATION", "CLEANING", "PEST_CONTROL", "WASTE_MANAGEMENT",
        "SOLAR_INSTALLATION", "EV_CHARGING_STATIONS", "ENERGY_EFFICIENT_LIGHTING", "RAINWATER_HARVESTING", "ECO_FRIENDLY_MATERIALS",
        "GREEN_ROOFING", "LANDSCAPE_DESIGN", "HARDSCAPING", "IRRIGATION_SYSTEMS", "DRAINAGE_SOLUTIONS",
        "LAND_CLEARING", "TREE_CARE", "FENCING", "WALL_CONSTRUCTION", "EARTHWORK",
        "FLOORING", "CEILING_WORK", "PARTITIONING", "CABINETRY", "INTERIOR_DECORATION",
        "EXTERIOR_DECORATION", "LIGHTING_INSTALLATION", "CURTAIN_WALLING", "EXTERIOR_CLADDING", "INSULATION",
        "FOUNDATION_WORK", "FRAMING", "DRYWALL", "PAINT_PREPARATION", "SHEETROCK_INSTALLATION",
        "VENTILATION_SYSTEMS", "AIR_CONDITIONING", "HEATING_SYSTEMS", "ELECTRICAL_WIRING", "LIGHT_FIXTURES",
        "WINDOW_INSTALLATION", "DOOR_INSTALLATION", "SIDING", "GUTTERS", "DRAINAGE_SYSTEMS",
        "ROOF_REPAIR", "TILE_INSTALLATION", "COUNTERTOPS", "CABINET_INSTALLATION", "FAUCETS_AND_FIXTURES",
        "BATHROOM_REMODELING", "KITCHEN_REMODELING", "BASEMENT_REMODELING", "ATTIC_REMODELING", "EXTERIOR_PAINTING",
        "INTERIOR_PAINTING", "DECORATIVE_PAINTING", "FLOOR_REFINISHING", "TERRAZZO", "MARBLE_WORK",
        "GRANITE_WORK", "STONE_MASONRY", "BRICK_MASONRY", "CONCRETE_REPAIR", "EPOXY_FLOORING"
    ];

    const displayedKeywords = useMemo(() => showAll ? keywords : keywords.slice(0, 40), [showAll]);

    useEffect(() => {
        fetchProductsAndSuppliers(currentKeyword);
    }, [currentKeyword, productPage, supplierPage]);

    const fetchProductsAndSuppliers = async (keyword, page = 1) => {
        setLoading(true);
        setError(null);

        try {
<<<<<<< HEAD
            const productsResponse = await axios.get(`https://quagga.onrender.com/api/v1/quagga/supplier/findByCategory/{category}`);
            const suppliersResponse = await axios.get(`https://quagga.onrender.com/api/v1/quagga/specialist/findByCategory/{category}`);
=======
            const [supplierResponse, specialistResponse] = await Promise.all([
                axios.get(`https://quagga.onrender.com/api/v1/quagga/supplier/findByCategory/${keyword}`),
                axios.get(`https://quagga.onrender.com/api/v1/quagga/specialist/findAll?keyword=${keyword}`)
            ]);
>>>>>>> 0ffc281e845c479d12a7e6b468297f1aa267a275

            setData(prevData => ({
                products: page === 1 ? specialistResponse.data : [...prevData.products, ...specialistResponse.data],
                suppliers: page === 1 ? supplierResponse.data : [...prevData.suppliers, ...supplierResponse.data],
            }));

            toast.success('Data fetched successfully!');
        } catch (error) {
            toast.error('An error occurred while fetching data. Please try again.');
            setError('An error occurred while fetching data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeywordClick = (keyword) => {
        setCurrentKeyword(keyword);
        setProductPage(1);
        setSupplierPage(1);
<<<<<<< HEAD
        fetchProductsAndSuppliers(keyword);
        navigate(`/keyword/${keyword}`); // Navigate to the keyword page
=======
>>>>>>> 0ffc281e845c479d12a7e6b468297f1aa267a275
    };

    const handleShowMore = (type) => {
        if (type === 'products') setProductPage(prev => prev + 1);
        else if (type === 'suppliers') setSupplierPage(prev => prev + 1);
    };

    return (
        <section className="py-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Keywords</h2>
                <ul className="flex flex-wrap gap-2">
                    {displayedKeywords.map((keyword, index) => (
                        <li key={index}>
                            <button
                                className="text-white hover:text-gray-700 hover:bg-sky-200 text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 dark:text-sky-900"
                                onClick={() => handleKeywordClick(keyword)}
                                aria-label={`Filter by ${keyword}`}
                            >
                                {keyword}
                            </button>
                        </li>
                    ))}
                </ul>
<<<<<<< HEAD
                {!showAll && (
                    <div className="mt-4">
                        <button
                            className="text-white hover:text-gray-700 hover:bg-sky-200  text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 dark:text-sky-900 dark:border-sky-500/15 dark:bg-sky-500/10 ..."
                            onClick={() => setShowAll(true)}
                        >
                            See all
                        </button>
                    </div>
                )}
=======
>>>>>>> 0ffc281e845c479d12a7e6b468297f1aa267a275

                {showAll && loading && <p>Loading...</p>}

                <div className="mt-8">
                    {data.products.length > 0 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4">Top Rated Products</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data.products.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>
                            <div className="mt-4">
                                <button
                                    className={`text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm ${loading && 'cursor-not-allowed opacity-50'}`}
                                    onClick={() => handleShowMore('products')}
                                    disabled={loading}
                                >
                                    Show More Products
                                </button>
                            </div>
                        </>
                    )}

                    {data.suppliers.length > 0 && (
                        <>
                            <h3 className="text-lg font-semibold mt-8 mb-4">Top Rated Suppliers</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data.suppliers.map((supplier, index) => (
                                    <SupplierCard key={index} supplier={supplier} />
                                ))}
                            </div>
                            <div className="mt-4">
                                <button
                                    className={`text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm ${loading && 'cursor-not-allowed opacity-50'}`}
                                    onClick={() => handleShowMore('suppliers')}
                                    disabled={loading}
                                >
                                    Show More Suppliers
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ToastContainer />
        </section>
    );
};

export default KeywordsSection;

