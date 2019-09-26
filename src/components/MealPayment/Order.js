import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";

const OrderStyle = styled.div`
    text-align: center;
    margin: 2em auto;

    h3 {
        padding: 0 3em;
        border-bottom: 2px solid black;
    }

    th {
        border-bottom: 4px solid black;
        height: 2em;
    }

    td {
        border: 1px solid grey;
        padding: 0 2em;

        &.column {
            background-color: rgb(138, 149, 151, 0.4);
        }
    }
    
    tr:nth-child(odd) {
        background-color: rgb(86,186,237, 0.7);
        animation-name: table;
        animation-duration: 5s;
    }
/* 
    @keyframes table {
        from {}
        to {}
    } */
`

const Order =({ ordered, handleDelete }) => {
    
    // const [total, setTotal] = useState(0)

    // ordered.map((orders => (
    //     setTotal(orders.price)
    // )));

    //setTotal(orders.price)
    console.log(ordered);
    const priceArray = ordered.map((orders => (
        Number(orders.plates) * orders.price
    )))
    const platesArray = ordered.map((orders => (
        Number(orders.plates)
    )))

    return (
        <OrderStyle>
            <tr>
                <th><h3>Person</h3></th>
                <th><h3>Meal Ordered</h3></th>
                <th><h3>Plates</h3></th>
                <th><h3>Price/Plate</h3></th>
                <th><h3>Amount Owed</h3></th>
            </tr>
            {ordered.map((orders => (
                <tr key={ordered.indexOf(orders)}>
                    <td>{orders.name}</td>
                    <td className = 'column'>{orders.order}</td>
                    <td>{orders.plates}</td>
                    <td className = 'column'>{orders.price}</td>
                    <td >{Number(orders.plates) * orders.price}</td>
                    <Button >Edit</Button>
                    <Button onClick={() => handleDelete(orders)}>Delete</Button>
                </tr>
            )))}
            {
                !ordered.length ? null : 
                <tr>
                    <td><h3>Total Amount</h3></td>
                    <td>---</td>
                    <td>
                        <h3>
                        {
                            platesArray.reduce((a,b) => a+b, 0)
                        }
                        </h3>
                    </td>
                    <td><h3>---</h3></td>
                    <td>
                        <h3>
                        {
                            priceArray.reduce((a,b) => a+b, 0)
                        }
                        </h3>
                    </td>
                </tr>
            }
        </OrderStyle>
    )
}

export default Order;