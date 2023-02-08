import React, { Component } from 'react'

import Api from '../../api'
import Slider from "react-slick";
import ProductCard from '../components/productCard/productCard';

class Products extends Component {

    constructor(props){
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            products: [],
        }
        
    }

    componentDidMount(){
        
        this.apiCtrl.callAxios(`product/product-service-list`, {is_service: 0}).then((response)=>{
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
        infinite: true,
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

            <div className='container-fluid'>
                <div className='row'>
                    <Slider {...settings}>
                        {this.state.products && this.state.products.map(item => (
                            
                            <div className='relatedSlides' key={item.title}>
                                <ProductCard data={item} />
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