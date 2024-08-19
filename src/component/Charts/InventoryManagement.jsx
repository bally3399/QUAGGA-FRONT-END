import React from 'react';

const InventoryManagement = () => {
    const products = [
        { id: 1, name: 'Cement', stock: 100 },
        { id: 2, name: 'Bricks', stock: 200 },
    ];

    return (
        <div className="pt-20 bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2">Product ID</th>
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Stock Level</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td className="border px-4 py-2">{product.id}</td>
                        <td className="border px-4 py-2">{product.name}</td>
                        <td className="border px-4 py-2">{product.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryManagement;
