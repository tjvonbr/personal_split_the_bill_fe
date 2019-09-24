import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const initialForm = {
    name: '',
    plates: '',
    price: '',
};

function MealOrders() {

    //const [form, setForm] = useState(initialForm)
    const [ordered, setOrdered] = useState([])

    const handleSubmit = (input, actions) => {
        //setForm(input);
        const infoToAdd = {
            name: input.name,
            plates: input.plates,
            price: input.price
        }
        setOrdered(ordered.concat(infoToAdd));
        //setForm(initialForm);
        actions.resetForm(initialForm);
    }

    const handleDelete = (meal) => {
        debugger
        console.log(ordered)
        ordered.map((el) => el.name === meal.name? setOrdered() : null)
        // delete()
        //setOrdered();
    }

    return (
        <div>
            <Formik initialForm={initialForm}
                onSubmit={handleSubmit}
                render={props => {
                    return (
                        <Form>
                            <span>
                                <Field name='name' type='text' placeholder='Name' />
                            </span>
                            <span>
                                <Field name='plates' component='select'>
                                    <option label='Number of Plates'/>
                                    {[...Array(10).keys()].map((plate) => 
                                    <option value={plate}>{`${plate} plates`}</option>
                                    )}
                                </Field>
                            </span>
                            <span>
                                <Field name='price' type='number' placeholder='Price per Plate' />
                            </span>
                            <button type='submit'>Add Meal</button>
                        </Form>
                    )
                }} />
            <h2>Meals and Prices</h2>
            <table>
                <Order handleDelete={handleDelete} ordered={ordered} />
            </table>
            
        </div>
    )
}

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

export default MealOrders;