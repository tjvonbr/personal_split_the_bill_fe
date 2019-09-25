import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Order from './Order';
import styled from 'styled-components';

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
        console.log(ordered);
        // _.remove(ordered, function(el) {
        //     return el.name === meal.name;
        // })
        ordered.map((el) => el.name === meal.name? {} : null)
        // delete()
        //setOrdered();
    }

    const MealOrdersStyle = styled.div`
        h2 {
            color: black;
            margin-top: 1em;
        }
        span {
            background-color: red;
            width: 30%;
        }
    `

    return (
        <MealOrdersStyle>
            <h2>Meals and Prices</h2>
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
            <table>
                <Order handleDelete={handleDelete} ordered={ordered} />
            </table>
            
        </MealOrdersStyle>
    )
}

export default MealOrders;