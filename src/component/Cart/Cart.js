import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div className='cart'>
            <h4 className='my-4'>Selected Watches</h4>
        </div>
    );
};

export default Cart;