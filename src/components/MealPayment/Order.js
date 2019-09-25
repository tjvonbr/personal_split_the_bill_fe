import React from 'react';

const Order =({ ordered, handleDelete }) => {
    return (
        <div>
            <tr>
                <th>Person</th>
                <th>No. of Plates</th>
                <th>Price per Plate</th>
            </tr>
            {ordered.map((orders => (
                <tr key={orders.name}>
                    <td>{orders.name}</td>
                    <td>{orders.plates}</td>
                    <td>{orders.price}</td>
                    <button onClick={() => handleDelete(orders)}>Delete</button>
                </tr>
            )))}
        </div>
    )
}

export default Order;