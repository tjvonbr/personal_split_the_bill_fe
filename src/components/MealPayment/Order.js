import React from 'react';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";


const OrderStyle = styled.div`
    text-align: center;
    margin: 2em auto;

    h3 {
        padding: 0 5em;
        border-bottom: 2px solid black;
    }

    td {
        border: 1px solid grey;
        padding: 0 2em;
    }

`

const Order =({ ordered, handleDelete }) => {
    return (
        <OrderStyle>
            <tr>
                <th><h3>Person</h3></th>
                <th><h3>Plates</h3></th>
                <th><h3>Price/Plate</h3></th>
            </tr>
            {ordered.map((orders => (
                <tr key={orders.name}>
                    <td>{orders.name}</td>
                    <td>{orders.plates}</td>
                    <td>{orders.price}</td>
                    <Button onClick={() => handleDelete(orders)}>Delete</Button>
                </tr>
            )))}
        </OrderStyle>
    )
}

export default Order;