import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const [randomProduct, setRandomProduct] = useState({})

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    const removeProduct = () => {
        setCart([])
    }

    const randomChoose = () => {
        const randomNumber = Math.floor(Math.random() * cart.length)
        setRandomProduct(cart[randomNumber])
        console.log(cart[randomNumber])
    }

    return (
        <div className='shop-container my-4'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product)}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>

                <Cart
                    cart={cart}
                    removeProduct={removeProduct}
                    randomChoose={() => randomChoose()}
                ></Cart>

            </div>
        </div>
    );
};

export default Shop;