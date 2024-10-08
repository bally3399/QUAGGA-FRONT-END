import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "../../component/productCard/ProductCard";
import { CartContext } from "../../component/cartContext/CartContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);
    const { addToCart, addToWishlist, wishlist, cart } = useContext(CartContext);

    const fetchProducts = async (pageNumber = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/products?page=${pageNumber}`);
            setProducts((prevProducts) => [...prevProducts, ...response.data.content]);
            toast.success(`Fetched ${response.data.content.length} more products!`);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error fetching products!");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
        setLoadMoreClicked(true);
    };

    useEffect(() => {
        let interval;
        if (loadMoreClicked) {
            interval = setInterval(() => {
                setPage((prevPage) => prevPage + 1);
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [loadMoreClicked]);

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.title} added to cart!`);
    };

    const handleAddToWishlist = (product) => {
        addToWishlist(product);
        toast.success(`${product.title} added to wishlist!`);
    };

    return (
        <div className="container mx-auto p-6">
            <ToastContainer />
            <h1 className="text-3xl font-bold mb-6">Product Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="relative">
                        <ProductCard
                            bgColor="bg-white"
                            imgSrc={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            buttonColor="bg-blue-500 hover:bg-blue-600"
                            rating={product.rating}
                        />


                        <button
                            onClick={() => handleAddToWishlist(product)}
                            className={`absolute top-2 left-2 bg-gray-500 text-white p-2 rounded-full ${
                                wishlist.find(item => item.id === product.id) ? 'bg-red-500' : ''
                            }`}
                            title="Add to Wishlist"
                        >
                            <FaHeart />
                        </button>


                        <button
                            onClick={() => handleAddToCart(product)}
                            className={`absolute top-2 right-2 bg-gray-500 text-white p-2 rounded-full ${
                                cart.find(item => item.id === product.id) ? 'bg-green-500' : ''
                            }`}
                            title="Add to Cart"
                        >
                            <FaShoppingCart />
                        </button>
                    </div>
                ))}
            </div>

            {loading && (
                <div className="flex justify-center mt-6">
                    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            )}

            <div className="text-center mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={handleLoadMore}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Load More"}
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
