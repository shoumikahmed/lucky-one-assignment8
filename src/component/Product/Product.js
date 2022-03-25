import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, image, price, id } = props.product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p><small>Id: {id}</small></p>
                <p>Price: {price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add ro Cart</p>
            </button>
        </div>
    );
};

export default Product;