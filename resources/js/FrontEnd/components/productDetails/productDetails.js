import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import products from '../../local-json/products.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../productCard/productCard';
import ReactImageMagnify from 'react-image-magnify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookNowButton from '../bookNow/bookNow';

import Api from '../../../api';

const ProductDetails = () => {
    const { category, slug } = useParams();
    // const selectedData = products.filter(x => x.id == productID)[0];
    const apiCtrl = new Api;
    const [detail, setDetail] = useState({
        banner_image: 'https://dealer-website.primarykeytech.in/dynamic/api/public/upload/product/DSC_41101675841396.JPG',
        base_price: '0',
        product: 'Product Name',
    });
    const [products, setProducts] = useState([])

    useEffect(()=>{
        apiCtrl.callAxios(`product/product-service/${slug}`).then((res)=>{
            if(res.success == true){
                setDetail(res.data)
            }
        })

        
            apiCtrl.callAxios(`product/product-service-list`, {is_service: 0, product_category: category}).then((response)=>{
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
                                category: category
                            }];
                    })
                
                    setProducts(Products)
                }
            })
   
    },[])

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
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images pr-3">
                            <div className="text-center pb-3">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: detail.product,
                                        isFluidWidth: true,
                                        src: detail.banner_image
                                    },
                                    largeImage: {
                                        src: detail.banner_image,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                            </div>
                            {/* <img className='main-image' id="main-image" src="" /> </div> */}
                            
                            {/* <div className="thumbnail text-center">
                                {selectedData && selectedData.gallery.map(item => (
                                    <img src={item} width="70" />
                                ))}
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="mb-3">
                                {/* <span className="text-uppercase brand">{selectedData.brand}</span> */}
                                <h5 className="text-uppercase productTitle">{detail.product}</h5>
                                <div className="price d-flex flex-row align-items-center">
                                    <span className="act-price">₹ {parseInt(detail.base_price)} <small>onwards</small></span>
                                    {/* <div className="ml-2">
                                        <small className="dis-price">$59</small>
                                        <span>40% OFF</span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="detail-section">
                                {detail.description}
                            </div>
                            {/* <div className='detail-section'>
                                <ul className='productDesc'>
                                    {selectedData.highlightedDescription && Object.keys(selectedData.highlightedDescription).map((key, i) => (
                                        <li><label>{key}: </label><div className='value'>{selectedData.highlightedDescription[key]}</div></li>
                                    ))}
                                </ul>
                            </div> */}
                            <div className="cart mt-4 align-items-center">
                                <button className="btn btn-secondary text-uppercase me-2 px-4">Brochure</button>
                                <button className="btn btn-primary text-uppercase me-2 px-4">Add to cart</button>
                                <BookNowButton type={'product'} header={'Enquiry'} image1={detail.banner_image} image2={detail.featured_image ? detail.featured_image: detail.banner_image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='productDetailed mt-5'>
                <Tabs >
                    <Tab eventKey="technical" title="Technical Specifications">
                        {selectedData.technicalDescription && selectedData.technicalDescription.map(item => (
                            <div className='detail-section'>
                                <h4 className='detail-title'>{item.name}</h4>
                                <ul className='productDesc'>
                                    {item.data && Object.keys(item.data).map((key, i) => (
                                        <li><label>{key}: </label><div className='value'>{item.data[key]}</div></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Tab>
                    <Tab eventKey="features" title="Features & Options">
                        {selectedData.features && selectedData.features.map(item => (
                            <img src={item} className='img-fluid my-3' />
                        ))}
                    </Tab>
                </Tabs>
            </div> */}

            <div className='mt-5'>
                <h3 className='sectionTitle mb-3'>Related Products</h3>
                <div className='row'>
                    <Slider {...settings}>
                        {products && products.map(item => (
                            <div className='relatedSlides' key={item.id}>
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;