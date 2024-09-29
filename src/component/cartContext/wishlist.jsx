// Wishlist.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Wishlist = () => {
    const { wishlist, addToCart, removeFromWishlist } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {wishlist.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                    <span>{item.name} - ${item.price}</span>
                    <div>
                        <button onClick={() => addToCart(item)} className="bg-teal-500 text-white px-4 py-2">Add to Cart</button>
                        <button onClick={() => removeFromWishlist(item.id)} className="bg-red-500 text-white px-4 py-2 ml-2">Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wishlist;
