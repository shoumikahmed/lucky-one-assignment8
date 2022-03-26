import React from 'react';

const Cart = (props) => {

    const { cart, removeProduct, selectRandomName } = props

    let name = ''
    for (const product of cart) {
        name = name + product.name
    }



    return (
        <div className='cart'>
            <h4 className='my-4'>Selected Watches</h4>
            <h5>{name}</h5>
            <button onClick={selectRandomName} className='btn btn-outline-success mt-5'>CHOOSE 1 FOR ME</button>
            <button onClick={removeProduct} className='btn btn-outline-primary mt-3'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;