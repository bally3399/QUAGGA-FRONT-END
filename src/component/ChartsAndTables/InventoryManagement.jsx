import React from 'react';

const InventoryManagement = () => {
    const products = [
        { id: 1, name: 'Cement', stock: 100 },
        { id: 2, name: 'Bricks', stock: 200 },
    ];

    const handleEdit = (id) => {
        console.log(`Edit product with id: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete product with id: ${id}`);
    };

    return (
        <div className="pt-20 bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Product ID
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Product Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Stock Level
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-left">
                            {product.id}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-left">
                            {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-left">
                            {product.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-left">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-blue-500 hover:text-blue-600 flex items-center"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="text-red-500 hover:text-red-600 flex items-center"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 mr-1 ml-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Delete
                                </a>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryManagement;
