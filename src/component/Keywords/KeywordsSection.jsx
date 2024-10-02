import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupplierCard from "../supplierCard/supplierCard";
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";

const KeywordsSection = () => {
    const [showAll] = useState(false);
    const [data, setData] = useState({ products: [], suppliers: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentKeyword, setCurrentKeyword] = useState(null);


    const [currentProductPage, setCurrentProductPage] = useState(1);
    const productsPerPage = 8;

    const keywords = [
        "WOODWORKING", "PAINTING", "DEMOLITION", "GLASSWORK", "LANDSCAPING",
        "CONCRETE", "PAVING", "PLUMBING", "HVAC", "ROOFING",
        "CARPENTRY", "MASONRY", "WATER PROOFING", "INSULATION", "TILING",
        "ELECTRICAL INSTALLATION", "STEELWORK", "FIRE PROTECTION", "SECURITY SYSTEMS", "INTERIOR FINISHING",
        "EXTERIOR FINISHING", "WINDOWS AND DOORS", "SIGNAGE", "COMMUNICATION SYSTEMS", "POWER GENERATION",
        "ELEVATORS AND ESCALATORS", "FABRICATION", "CLEANING", "PEST CONTROL", "WASTE MANAGEMENT",
        "SOLAR_INSTALLATION", "EV CHARGING STATIONS", "ENERGY EFFICIENT LIGHTING", "RAINWATER HARVESTING", "ECO FRIENDLY MATERIALS",
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
        if (currentKeyword) {
            fetchProductsAndSuppliers(currentKeyword);
        }
    }, [currentKeyword]);

    const fetchProductsAndSuppliers = async (keyword) => {
        setLoading(true);
        setError(null);

        try {
            const [supplierResponse, productResponse] = await Promise.all([
                axios.get(`https://quagga.onrender.com/api/v1/quagga/supplier/findByCategory/${keyword}`),
                axios.get(`https://quagga.onrender.com/api/v1/quagga/specialist/findAll?keyword=${keyword}`)
            ]);

            setData({
                products: productResponse.data,
                suppliers: supplierResponse.data,
            });

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
        setCurrentProductPage(1);
        setData({ products: [], suppliers: [] });
    };


    const indexOfLastProduct = currentProductPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.products.slice(indexOfFirstProduct, indexOfLastProduct);


    const totalProductPages = Math.ceil(data.products.length / productsPerPage);

    const handleNextPage = () => {
        if (currentProductPage < totalProductPages) {
            setCurrentProductPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentProductPage > 1) {
            setCurrentProductPage(prev => prev - 1);
        }
    };

    return (
        <section className="py-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Keywords</h2>
                <ul className="flex flex-wrap gap-2">
                    {displayedKeywords.map((keyword, index) => (
                        <li key={index}>
                            <button
                                className={`text-white hover:text-gray-700 hover:bg-sky-200 text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 dark:text-sky-900 ${loading && currentKeyword === keyword ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={() => handleKeywordClick(keyword)}
                                disabled={loading && currentKeyword === keyword}
                                aria-label={`Filter by ${keyword}`}
                            >
                                {keyword}
                            </button>
                        </li>
                    ))}
                </ul>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="mt-8">
                    {currentProducts.length > 0 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4">Top Rated Products</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentProducts.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <div className="mt-4 flex justify-center items-center space-x-4">
                                <button
                                    className={`text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm ${currentProductPage === 1 && 'cursor-not-allowed opacity-50'}`}
                                    onClick={handlePrevPage}
                                    disabled={currentProductPage === 1}
                                >
                                    Previous
                                </button>
                                <span>Page {currentProductPage} of {totalProductPages}</span>
                                <button
                                    className={`text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm ${currentProductPage === totalProductPages && 'cursor-not-allowed opacity-50'}`}
                                    onClick={handleNextPage}
                                    disabled={currentProductPage === totalProductPages}
                                >
                                    Next
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
                        </>
                    )}
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default KeywordsSection;
