import React from 'react';

const Cart = (props) => {
    const { cart } = props

    let name = ''
    for (const product of cart) {
        name = name + product.name
    }

    return (
        <div className='cart'>
            <h4 className='my-4'>Selected Watches</h4>
            <h5>{name}</h5>
        </div>
    );
};

export default Cart;