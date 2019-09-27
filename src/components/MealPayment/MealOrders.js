import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Order from './Order';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";
import * as yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

import TableNav from '../TableNav'

const validationSchema = yup.object().shape({
    name: yup.string()
                .max(40, 'Field cannot be longer than 40 characters')
                .required('Kindly input the name of the person'),
    order: yup.string()
                .max(40, 'Field cannot be longer than 40 characters')
                .required('Kindly input the meal ordered'),
    plates: yup.number('Kindly select the number of plates'),
    price: yup.number()
                .required('Kindly input the name of the person')
                .moreThan(-1, 'You have added a negative value')
})

const initialForm = {
    name: '',
    order: '',
    plates: '',
    price: '',
};

const mealApi = 'https://split-the-bill-bw.herokuapp.com/api/user/meal'

function MealOrders() {

    //const [form, setForm] = useState(initialForm)
    const [ordered, setOrdered] = useState([])

    const handleSubmit = (input, actions) => {
        // debugger
        //setForm(input);
        const infoToAdd = {
            name: input.name,
            order: input.order,
            plates: input.plates,
            price: input.price
        }
        
        setOrdered(ordered.concat(infoToAdd))
        // debugger
        
        // axios.post(mealApi, infoToAdd)
        //     .then(res => {
        //         debugger
        //     })
        //     .catch(err => {
        //         debugger
        //     })
        //setForm(initialForm);
        actions.resetForm(initialForm);
    }

        const handleDelete = (meal) => {
        console.log(ordered);
        // _.remove(ordered, function(el) {
        //     return el.name === meal.name;
        // })
        const results = ordered.filter((el) => el.name !== meal.name) //? ordered.splice((ordered.indexOf(el)), 1) : null)
        // delete()
        setOrdered(results);
        // debugger
        //setOrdered();
    }

    const MealOrdersStyle = styled.div`
        margin-top: 3%;
        font-family: 'Vast Shadow'

        h2 {
            color: black;
            margin-top: 1em;
            font-family: 'Vast Shadow';
        }

        .form {
            display: flex;
            justify-content: center;
            border: 3px solid rgb(8,186,237);
            background-color: rgb(95,110,128, 0.4);
            padding: 8px;
            font-family: 'Vast Shadow';

            .hover {
                &:hover {
                cursor: pointer;
                }
            }

            Button {
                cursor: pointer;
                border: 1px solid black;
                margin-left: 3em;

                &:hover {
                cursor: pointer;
                }
            }
            
            span {
                width: 30vw;
                display: flex;
                height: 40px;
                font-family: 'Vast Shadow';

                .dropdown {
                    background-color: rgb(8,186,237, 0.4);
                    border: 2px solid white;
                    height: 2em;
                    margin-top: 0.15em;
                    width: 70%;
                    font-weight: bold;
                    font-size: 1.3em;
                    opacity: 0.6;
                    border-radius: 0.4em;
                }
            }

            .namespan {
                width: 60em;
                padding-left: 1em;
                font-family: 'Vast Shadow';

                .name {
                    background-color: rgb(8,186,237, 0.4);

                    &:hover {
                cursor: pointer;
                }
                }
            }
            .pricespan {
                height: 2.62em;
                border-radius: 0.4em;
                margin-top: 0.15em;
            }
        }
        table {
            display: flex;
            transition: 2s;
        }
    `

    return (
      <>
      <TableNav />
        <MealOrdersStyle>
            <h2>Meals and Prices</h2>
            <Formik initialForm={initialForm}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                render={props => {
                    return (
                        <Form className='form'>
                            <span className='namespan'>
                                <Field className='name hover' name='name' type='text' placeholder='Name' />
                                <ErrorMessage name='name' component='div' />
                            </span>
                            <span className='namespan'>
                                <Field className='hover' name='order' type='text' placeholder='Meal Ordered' />
                                <ErrorMessage name='order' component='div' />
                            </span>
                            <span>
                                <Field className='dropdown hover' name='plates' component='select'>
                                    <option disabled selected label='Plates'/>
                                    {[...Array(10).keys()].map((plate) => 
                                    <option value={plate}>{`${plate} plates`}</option>
                                    )}
                                    <ErrorMessage name='plates' component='div' />
                                </Field>
                            </span>
                            <span>
                                <Field className='pricespan hover' name='price' type='number' placeholder='Price per Plate' />
                                <ErrorMessage name='price' component='span' />
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
        </>
    )
}

export default MealOrders;