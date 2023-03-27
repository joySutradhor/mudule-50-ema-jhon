import "./Product.css"
import React from 'react';

const Product = (props) => {
    const handle = props.handleCart;
    const {img , name, price , seller, ratings , id} = props.product ;
    return (
        <div className="parentSingleProduct">
            <div className="singleProduct">
            <h5 className="productImg"><img src={img} alt="" /></h5>
            <h6 className="productName">{name}</h6>
            <p>Price : {price}</p>
            <p>Seller : {seller}</p>
            <p>Rattings : {ratings} Stars</p>
            <button className="btn" onClick={ ()=> handle(props.product)}>Add to Cart  </button>
        </div>
        
        </div>
    );
};

export default Product;