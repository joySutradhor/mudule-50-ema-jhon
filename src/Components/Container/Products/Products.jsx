import "./Products.css"
import React, { useEffect , useState } from 'react';
import Product from './../../Utilities/SingleProduct/Product';

const Products = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    console.log(cart)
    useEffect(()=> {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleCart = (product) => {
        console.log(product)
        const newCart = [...cart , product]
        setCart(newCart)
    }

    return (
        <div className="productsContainer" >
            <div className="singleProductContainer">
            {
                products.map(productItem => <Product
                key={productItem.id}
                product= {productItem}
                handleCart={handleCart}
                ></Product> )
            }
            </div>
            <div className="orderSummery">
                <h5>Order Sumerry</h5>
                <p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;