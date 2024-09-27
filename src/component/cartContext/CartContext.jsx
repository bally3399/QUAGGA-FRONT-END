// CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    const [totalPrice, setTotalPrice] = useState(0);
     const [userEmail] = useState(localStorage.getItem('userEmail') || '');

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        removeFromWishlist(product.id);
        calculateTotalPrice(updatedCart);
    };


    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart);
    };


    const addToWishlist = (product) => {
        const updatedWishlist = [...wishlist, product];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };


    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter(item => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const calculateTotalPrice = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishlist, addToWishlist, removeFromWishlist, userEmail, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

 export default CartProvider
