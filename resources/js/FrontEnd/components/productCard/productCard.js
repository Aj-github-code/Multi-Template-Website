import React, { Component } from "react";
import './productCard.css';

import { Link } from "react-router-dom";

class ProductCard extends Component {
    render() {
        if (!this.props.data) return null;
        let data = this.props.data;
        return (
            <Link to={data.slug ?  data.slug : '#' } className="card productCard" >
                <img src={data.productImage} alt="Denim Jeans" />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p className="description">{data.description}</p>
                    
                    <p className="price">{data.price ? `₹ ${data.price}` : 'Contact For Pricing'} </p>
                </div>
           
            </Link>
        );
    }
}

export default ProductCard;