import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupplierCard from "../supplierCard/supplierCard";
import ProductCard from "../productCard/ProductCard";

const KeywordsSection = () => {
    const [showAll] = useState(false);
    const [data, setData] = useState({ products: [], suppliers: [] });
    const [loading, setLoading] = useState(false);
    const [ setError] = useState(null);
    const [productPage, setProductPage] = useState(1);
    const [supplierPage, setSupplierPage] = useState(1);
    const [currentKeyword, setCurrentKeyword] = useState("WOODWORKING");

    const keywords = [
        "WOODWORKING", "PAINTING", "DEMOLITION", "GLASSWORK", "LANDSCAPING",
        "CONCRETE", "PAVING", "PLUMBING", "HVAC", "ROOFING",
        "CARPENTRY", "MASONRY", "WATER_PROOFING", "INSULATION", "TILING",
        "ELECTRICAL INSTALLATION", "STEELWORK", "FIRE PROTECTION", "SECURITY_SYSTEMS", "INTERIOR FINISHING",
        "EXTERIOR FINISHING", "WINDOWS AND DOORS", "SIGNAGE", "COMMUNICATION_SYSTEMS", "POWER GENERATION",
        "ELEVATORS AND ESCALATORS", "FABRICATION", "CLEANING", "PEST CONTROL", "WASTE MANAGEMENT",
        "SOLAR_INSTALLATION", "EV CHARGING STATIONS", "ENERGY_EFFICIENT LIGHTING", "RAINWATER HARVESTING", "ECO FRIENDLY MATERIALS",
        "GREEN ROOFING", "LANDSCAPE DESIGN", "HARDSCAPING", "IRRIGATION SYSTEMS", "DRAINAGE SOLUTIONS",
        "LAND_CLEARING", "TREE CARE", "FENCING", "WALL CONSTRUCTION", "EARTHWORK",
        "FLOORING", "CEILING WORK", "PARTITIONING", "CABINETRY", "INTERIOR DECORATION",
        "EXTERIOR DECORATION", "LIGHTING INSTALLATION", "CURTAIN WALLING", "EXTERIOR CLADDING", "INSULATION",
        "FOUNDATION WORK", "FRAMING", "DRYWALL", "PAINT PREPARATION", "SHEETROCK INSTALLATION",
        "VENTILATION SYSTEMS", "AIR CONDITIONING", "HEATING SYSTEMS", "ELECTRICAL WIRING", "LIGHT FIXTURES",
        "WINDOW INSTALLATION", "DOOR INSTALLATION", "SIDING", "GUTTERS", "DRAINAGE SYSTEMS",
        "ROOF REPAIR", "TILE INSTALLATION", "COUNTERTOPS", "CABINET INSTALLATION", "FAUCETS AND FIXTURES",
        "BATHROOM REMODELING", "KITCHEN REMODELING", "BASEMENT REMODELING", "ATTIC REMODELING", "EXTERIOR PAINTING",
        "INTERIOR PAINTING", "DECORATIVE PAINTING", "FLOOR REFINISHING", "TERRAZZO", "MARBLE WORK",
        "GRANITE WORK", "STONE MASONRY", "BRICK MASONRY", "CONCRETE REPAIR", "EPOXY FLOORING"
    ];

    const displayedKeywords = showAll ? keywords : keywords.slice(0, 40);

    useEffect(() => {
        fetchProductsAndSuppliers(currentKeyword);
    }, [currentKeyword, productPage, supplierPage]);

    const fetchProductsAndSuppliers = async (keyword, page = 1) => {
        setLoading(true);
        setError(null);

        try {
            const [supplierResponse, specialistResponse] = await Promise.all([
                axios.get(`https://quagga.onrender.com/api/v1/quagga/supplier/findByCategory/${keyword}`),
                axios.get(`https://quagga.onrender.com/api/v1/quagga/specialist/findAll?keyword=${keyword}`)
            ]);

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

