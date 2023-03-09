import React, { Component } from 'react'

import Api from '../services/api';
import Slider from "react-slick";
import ProductCard from '../components/productCard/productCard';

import { Link } from 'react-router-dom';

class Products extends Component {

    constructor(props){
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            products: [],
            category:'accessories',
        }
        
    }

    componentDidMount(){
        
        this.apiCtrl.callAxios(`/product/product-service-list`, {is_service: 0,  product_category: this.state.category}).then((response)=>{
            if(response.success == true){
                const res = response.data;
                let Products = [];
                res.map((value, index)=>{
                   

                        Products = [...Products, {title:value.product, description: value.description, productImage: value.banner_image, price:value.base_price, slug: value.slug}]
                    
                })
            
                this.setState({products: Products})
                console.log('Products', Products)
            }
        })

    }
 render(){
    let settings = {
        dots: true,
        infinite: (this.state.products.length > 4) ? true : false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className='section-5'>

            <div className='container-fluid' style={{width:'90%'}}>
                <div className='row'>
                    <Slider {...settings}>
                        {this.state.products && this.state.products.map(item => (
                            
                            <div className='relatedSlides' key={item.title}>
                               <Link to={item.slug ? 'product/'+this.state.category + '/'+ item.slug : '#' } className="card productCard" >
                                    <img src={item.productImage} alt="Denim Jeans" />
                                    <div className="card-body">
                                        <h3>{item.title}</h3>
                                        <p className="description">{item.description}</p>
                                        
                                        <p className="price">{item.price ? `₹ ${item.price}` : 'Contact For Pricing'} </p>
                                    </div>
                            
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
      )
 }
}

export default Products;