import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrementAmount, incrementAmount, removeFromCart } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import './cart.css';

function Cart() {
    const objectsData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const MAX_TICKETS = 5;

    const handleRemoveFromCart = (objectDataId, ticketType) => {
        dispatch(removeFromCart({ id: objectDataId, ticketType }));
    };

    const handleIncrementAmount = (objectDataId, ticketType) => {
        const item = objectsData.find(item => item.objectData.id === objectDataId && item.ticketType === ticketType);
        const newAmount = item.amount + 1;

        if (newAmount <= MAX_TICKETS) {
            dispatch(incrementAmount({ id: objectDataId, ticketType }));
        }
    };

    const handleDecrementAmount = (objectDataId, ticketType) => {
        const item = objectsData.find(item => item.objectData.id === objectDataId && item.ticketType === ticketType);

        if (item.amount > 1) {
            dispatch(decrementAmount({ id: objectDataId, ticketType }));
        }
    };

    const calculateTotalAmount = (price, amount) => {
        const numericPrice = parseFloat(price) || 0;
        return numericPrice * amount;
    };

    const totalAmount = objectsData.reduce((total, item) => {
        const itemPrice = parseFloat(item.objectData.price) || 0;
        return total + itemPrice * item.amount;
    }, 0);

    const goBack = () => {
       window.history.back();
    };

    const Continue = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart__page">
            <div className="cart__objects">
                {objectsData.length > 0 ? (
                    objectsData.map((object) => (
                        <div key={object.objectData.id + object.ticketType} className="cart__object">
                            <div className='cart__left'>
                                <div className='cart__object__title'>
                                    {object.objectData.title}
                                </div>
                                <div className='cart__object__price'>
                                    Price: {parseFloat(object.objectData.price).toFixed(2)}$
                                </div>
                                <div className='cart__object__type'>
                                    Type: {object.ticketType}
                                </div>
                            </div>
                            <div className='cart__right'>
                                <button 
                                    className='cart__object__plus' 
                                    onClick={() => handleIncrementAmount(object.objectData.id, object.ticketType)}
                                    disabled={object.amount >= MAX_TICKETS} 
                                >
                                    +
                                </button>
                                <div className='cart__object__amount'>
                                    {object.amount}
                                </div>
                                <button 
                                    className='cart__object__minus' 
                                    onClick={() => handleDecrementAmount(object.objectData.id, object.ticketType)}
                                >
                                    -
                                </button>
                                <div className='cart__object__total-price'>
                                    Total: {calculateTotalAmount(object.objectData.price, object.amount).toFixed(2)}$
                                </div>
                                <button 
                                    className='cart__object__remove' 
                                    onClick={() => handleRemoveFromCart(object.objectData.id, object.ticketType)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="cart__empty">Your cart is empty</div>
                )}
                {objectsData.length > 0 && (
                    <div className="cart__total">
                        Total Amount: {totalAmount.toFixed(2)}$
                    </div>
                )}
                
                {objectsData.length > 0 && (
                    <div className="cart__buttons">
                        <button className='cart__button__goback' onClick={goBack}>
                            Go Back
                        </button>
                        <button className='cart__button__continue' onClick={Continue}>
                            Continue 
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;

