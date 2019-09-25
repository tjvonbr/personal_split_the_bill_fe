import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Order from './Order';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string()
                .max(50, 'Field cannot be longer than 50 characters')
                .required('Kindly input the name of the person'),
    //plates: yup.required('Kindly select the number of plates'),
    price: yup.number()
                .required('Kindly input the name of the person')
                .positive('You have added a negative value')
})

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
        .form {
            display: flex;
            justify-content: center;
            border: 3px solid rgb(8,186,237);
            background-color: rgb(95,110,128, 0.4);
            padding: 8px;


            span {
                width: 30vw;
                display: flex;
                height: 40px;

                .dropdown {
                    background-color: rgb(8,186,237);
                    width: 70%;
                    color: white;
                    font-weight: bold;
                    font-size: 1.3em;
                }
            }

            .namespan {
                width: 60em;
                padding-left: 5em;
            }
        }
        table {
            display: flex;
        }
    `

    return (
        <MealOrdersStyle>
            <h2>Meals and Prices</h2>
            <Formik initialForm={initialForm}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                render={props => {
                    return (
                        <Form className='form'>
                            <span className='namespan'>
                                <Field name='name' type='text' placeholder='Name' />
                            </span>
                            <span>
                                <Field className='dropdown' name='plates' component='select'>
                                    <option label='Number of Plates'/>
                                    {[...Array(10).keys()].map((plate) => 
                                    <option value={plate}>{`${plate} plates`}</option>
                                    )}
                                </Field>
                            </span>
                            <span>
                                <Field name='price' type='number' placeholder='Price per Plate' />
                            </span>
                            <span>
                            <Button type='submit'>Add Meal</Button>
                            </span>
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