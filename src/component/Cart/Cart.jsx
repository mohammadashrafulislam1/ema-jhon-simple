import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Cart = ({cart, handleClearCart, children}) => {
    // const {cart, handleClearCart} = props;
    let total = 0;
    let totalShipping =0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
        product.quantity = product.quantity || 1;
    }
    const tax = total * 7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
        <h4>Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: {total}</p>
        <p>Total Shipping: {totalShipping}</p>
        <p>Tax: {tax}</p>
        <h6>Grand Total: {grandTotal}</h6>
        <button className='btn-clear-cart' onClick={handleClearCart}>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
        {children}
        </div>
    );
};

export default Cart;