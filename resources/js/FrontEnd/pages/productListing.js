import React, { Component } from 'react';
import PageTitle from '../components/pageTitle/pageTitle';
import ProductCard from '../components/productCard/productCard';
import products from '../local-json/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from '../services/api';
import { Link } from 'react-router-dom';

import withRouter from '../services/withRouter';
import textModifier from '../services/textModifier';
class ProductListing extends Component {
    constructor(props){
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            products: [],
            categories: [],
            category: this.props.params.category ? this.props.params.category : "Products",
            page: 0,
            pageLength: 8,
        }
        
    }


    productServiceList(){
        this.apiCtrl.callAxios(`/product/product-service-list`, 
            {
                is_service: 0, 
                length: this.state.pageLength, 
                start: (this.state.page * this.state.pageLength), 
                slug: this.state.category
            }).then((response)=>{
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
                this.props.loader(false)
                this.setState(old=>({products: [...old.products, ...Products], page: (1+this.state.page)}))
            }
        })
    }
    componentDidMount(){
            
      
        this.productServiceList();
               
        this.apiCtrl.callAxios(`/product/product-category-list`, {is_service: 0, ignore_category: this.state.category}).then((response)=>{
            if(response.success == true){
                const res2 = response.data;
                let categorie = [];
                res2.map((value, index)=>{
                   

                        categorie = [...categorie, {
                            id:value.id,
                            title:value.category_name, 
                            description: value.description, 
                            productImage: value.image_name_1, 
                            // price:value.base_price,
                            slug: value.slug,
                            category: value.category_name,
                        }];
                    
                })
                this.setState({categories: categorie})
            }
        })

    }
    render() {
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
                    {(this.state.products.length === ((this.state.page) * this.state.pageLength)) &&
                        <div className="row mb-4">
                            <div className="col-md-12 text-center">
                                <button className="view-more-button" onClick={()=>{this.productServiceList()}} >View More</button>
                            </div>
                        </div>
                    }
                </div>
                <div className='container'>
                    <h3 className='sectionTitle mb-3'>Related Categories</h3>
                    <div className='row'>
                        <Slider {...settings}>
                            {this.state.categories && this.state.categories.map(item => (
                                <div className='relatedSlides' key={item.id}>
                                     <a href={item.slug ? item.slug : '#' } className="card productCard" >
                                        <img src={item.productImage} alt="Denim Jeans" className="img-fluid" style={{width:"100%", height:"150px"}} />
                                        <div className="card-body">
                                            <h3>{item.title}</h3>
                                            <p className="description">{item.description}</p>
                                            
                                            <p className="price">{item.price ? `₹ ${item.price}` : 'Contact For Pricing'} </p>
                                        </div>
                                
                                    </a>
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