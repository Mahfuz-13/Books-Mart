import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const book of cart){
        total = total + book.price;
    }
    return (
        <div>
            <h3>Books Added : {cart.length}</h3>
            <h3>Total Cost : {total}$</h3>
            <ul className='list-group'>
                   {
                       cart.map( book=><span className='name'>{book.name}</span>)
                   }
            </ul>
        </div>
    );
};

export default Cart;