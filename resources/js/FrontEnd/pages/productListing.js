import React, { Component } from 'react';
import PageTitle from '../components/pageTitle/pageTitle';
import ProductCard from '../components/productCard/productCard';
import products from '../local-json/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from '../../api';

import withRouter from '../services/withRouter';
import textModifier from '../services/textModifier';
class ProductListing extends Component {
    constructor(props){
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            products: [],
            category: this.props.params.category ? this.props.params.category : "Products",
        }
        
    }
    componentDidMount(){
        
        this.apiCtrl.callAxios(`product/product-service-list`, {is_service: 0, product_category: this.state.category}).then((response)=>{
            if(response.success == true){
                const res = response.data;
                let Products = [];
                res.map((value, index)=>{
                   

                        Products = [...Products, {
                            id:value.id,
                            title:value.product, 
                            description: value.description, 
                            productImage: value.banner_image, 
                            price:value.base_price,
                            slug: value.slug,
                            category: this.state.category,
                        }];
                    
                })
            
                this.setState({products: Products})
            }
        })

    }
    render() {
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
            <div className='productListing'>
                <PageTitle data={textModifier(`${this.state.category}`)} />
                <div className='container'>
                    <div className='row'>
                        {this.state.products && this.state.products.map(item => (
                            <div className='col-md-3' key={item.id}>
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <h3 className='sectionTitle mb-3'>Related Products</h3>
                    <div className='row'>
                        <Slider {...settings}>
                            {this.state.products && this.state.products.map(item => (
                                <div className='relatedSlides' key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
};


export default withRouter(ProductListing);