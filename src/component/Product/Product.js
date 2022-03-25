import React from 'react';

const Product = (props) => {
    const { name, image, price, id } = props.product
    return (
        <div>
            <img src={image} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p><small>Id: {id}</small></p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;