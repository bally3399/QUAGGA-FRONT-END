import React, { useMemo } from 'react';
import DataTable from './DataTable';

const OrdersTable = () => {
    const columns = useMemo(
        () => [
            { Header: 'Order ID', accessor: 'orderID' },
            { Header: 'Customer', accessor: 'customer' },
            { Header: 'Date', accessor: 'date' },
            { Header: 'Status', accessor: 'status' },
            { Header: 'Amount', accessor: 'amount' },
        ],
        []
    );

    const data = [
        { orderID: '001', customer: 'John Doe', date: '2023-01-01', status: 'Shipped', amount: '$200' },
        { orderID: '002', customer: 'Jane Doe', date: '2023-01-05', status: 'Pending', amount: '$150' },
        { orderID: '003', customer: 'Alice', date: '2023-01-10', status: 'Returned', amount: '$250' },
    ];

    return (
        <div className=" pt-20 p-4 bg-white rounded-lg shadow-sm">
            <h2 className="font-bold text-xl mb-4">Orders Table</h2>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default OrdersTable;