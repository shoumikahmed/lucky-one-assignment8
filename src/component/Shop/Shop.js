import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='row container my-4'>
            <div className='col-md-10'>

            </div>
            <div className='col-md-2'>
                <h3>cart</h3>
            </div>
        </div>
    );
};

export default Shop;