import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './checkout.css';
import Error from "../../components/errors/Error";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { clearCart } from "../../redux/actions";

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Error>{meta.error}</Error>
            ) : null}
        </div>
    );
};

const goBack = () => {
    window.history.back();
};

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // створюємо dispatch

    return (
        <section>
            <div className="checkout-box">
                <div className="checkout-box__formik">
                    <Formik
                        initialValues={{
                            name: '',
                            surname: '',
                            date_of_birth: '',
                            email: '',
                            phone: '',
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(10, 'Must be 10 characters or less')
                                .required('Name is required'),

                            surname: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(10, 'Must be 10 characters or less')
                                .required('Surname is required'),

                            date_of_birth: Yup.string()
                                .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format (DD.MM.YYYY)')
                                .required('Date of birth is required')
                                .test('is-adult', 'You must be at least 18 years old', function (value) {
                                    const currentDate = new Date();
                                    const selectedDate = value ? new Date(value.split('.').reverse().join('-')) : null;

                                    if (!selectedDate || isNaN(selectedDate.getTime())) {
                                        return true;
                                    }

                                    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
                                    const isAdult =
                                        ageDifference > 18 ||
                                        (ageDifference === 18 &&
                                            (currentDate.getMonth() > selectedDate.getMonth() ||
                                                (currentDate.getMonth() === selectedDate.getMonth() &&
                                                    currentDate.getDate() >= selectedDate.getDate())));

                                    return isAdult;
                                }),

                            email: Yup.string()
                                .email('Invalid email address') 
                                .matches(
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                    'Invalid email domain'  
                                )
                                .required('Email is required'),

                            phone: Yup.string()
                                .matches(/^\+\d{12}$/, 'Invalid phone number (must be +XXXXXXXXXXXX)')
                                .required('Phone number is required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);
                                dispatch(clearCart()); 
                                navigate('/success');
                            }, 1000);
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='checkout-box__forms'>
                                    <h1 className='checkout-box__title'>CHECKOUT</h1>
                                    <CustomTextInput label='Name' name='name' type='text' placeholder='e.g., Leo' />
                                    <CustomTextInput label='Surname' name='surname' type='text' placeholder='e.g., Messi' />
                                    <CustomTextInput label='Date of Birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
                                    <CustomTextInput label='Email' name='email' type='email' placeholder='messi10@example.com' />
                                    <CustomTextInput label='Phone Number' name='phone' type='text' placeholder='+380501112555' />
                                </div>

                                <div className='button__checkout'>
                                    <button className='button__goback' type="button" onClick={goBack}>
                                        Go back
                                    </button>
                                    <button className='button__submit' type='submit'>
                                        {props.isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default Checkout;

