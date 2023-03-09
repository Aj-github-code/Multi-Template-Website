import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import product from '../../local-json/products.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../productCard/productCard';
import ReactImageMagnify from 'react-image-magnify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Api from '../../services/api';
import BookNowButton from '../bookNow/bookNow';
import textModifier from '../../services/textModifier';
import { API_CONSTANTS } from '../../assets/config/constants';

const ProductDetails = (props) => {
    const { category,type, slug } = useParams();
    const selectedData = product.filter(x => x.id == 1)[0];
    const apiCtrl = new Api;
    const [detail, setDetail] = useState({
        banner_image:  `${API_CONSTANTS.URL}/upload/product/DSC_41101675841396.JPG`,
        base_price: '0',
        product: 'Product Name',
    });
    const [products, setProducts] = useState([])

    useEffect(()=>{
        apiCtrl.callAxios(`/vehicle/get-vehicle-by-model/${slug}`).then((res)=>{
            if(res.success == true){
                setDetail(res.data)
            
            }
            props.loader(false)
        })
        
        apiCtrl.callAxios(`/vehicle/list`, {vehicle_status: category}).then((response)=>{
             if(response.success == true){
                 const res = response.data;
                 let Vehicles = [];
                 res.map((value, index)=>{
                    
 
                         Vehicles = [...Vehicles, {
                             id:value.id,
                             title:value.vehicle_model, 
                             description: value.vehicle_make, 
                             productImage: value.images, 
                             slug: value.vehicle_model,
                             category: category,
                         }];
                     
                 })
             
                 setProducts(Vehicles)
             }
         })
        
        // apiCtrl.callAxios(`/product/product-service-list`, {is_service: 0, product_category: 'Accessories'}).then((response)=>{
        //     if(response.success == true){
        //         const res = response.data;
        //         let Products = [];
        //         res.map((value, index)=>{
                    

        //                 Products = [...Products, {title:value.product, description: value.description, productImage: value.banner_image, price:value.base_price}]
                    
        //         })
            
        //         setProducts(Products)
        //     }
        // })
   
    },[])

    let settings = {
        dots: true,
        infinite: false,
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
            <div className="row d-flex justify-content-center" style={{marginTop: '80px'}}>
                <div className="row">   
                    <div className="col-md-6">
                        <div className="images pr-3">
                            <div className="text-center pb-3">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: detail.vehicle_model,
                                        isFluidWidth: true,
                                        src: detail.images
                                    },
                                    largeImage: {
                                        src: detail.images,
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
                                <span className="text-uppercase brand">{detail.vehicle_make}</span>
                                <h5 className="text-uppercase productTitle">{detail.vehicle_model}</h5>
                                <div className="price d-flex flex-row align-items-center">
                                    <span className="act-price">{detail.price ? `₹ ${parseInt(detail.price)}` : 'Contact For Pricing'}  <small></small></span>
                                    {/* <div className="ml-2">
                                        <small className="dis-price">$59</small>
                                        <span>40% OFF</span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="detail-section">
                                {/* {(detail.fuel_type).toUpperCase()} */}
                            </div>
                            {/* <div className='detail-section'>
                                <ul className='productDesc'>
                                    {selectedData.highlightedDescription && Object.keys(selectedData.highlightedDescription).map((key, i) => (
                                        <li><label>{key}: </label><div className='value'>{selectedData.highlightedDescription[key]}</div></li>
                                    ))}
                                </ul>
                            </div> */}
                            <div className="cart mt-4 align-items-center">
                                {/* <button className="btn btn-secondary text-uppercase me-2 px-4">Download Brochure</button> */}
                                <BookNowButton type={'vehicle'} header={'Book Now'} image1={detail.images} image2={detail.images} />
                                {/* <button className="btn btn-primary text-uppercase me-2 px-4">Add to cart</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productDetailed mt-5'>
                <Tabs >
                    {detail.vehicle_status && (detail.vehicle_status === 'used') &&
                     <Tab eventKey="usedVehicle" title="Used Vehicles">
                     {detail.used_vehicle && Object.entries(detail.used_vehicle).map(([index, item]) => (
                         <div className='detail-section'>
                             <h4 className='detail-title'>{textModifier(index)}</h4>
                             <ul className='productDesc'>
                                 {item && Object.entries(item).map(([key, i]) => (
                                     <li><label>{key}: </label><div className='value'>{textModifier(key)} : {i}</div></li>
                                 ))}
                             </ul>
                         </div>
                     ))}
                 </Tab>
                    }
                    <Tab eventKey="technical" title="Technical Specifications">
                    <div className="row">
                        {detail.specification && Object.entries(detail.specification).map(([index, item]) => (
                               <div className='col-md-4'>
                            <div className='detail-section'>
                                <h4 className='detail-title'>{textModifier(index)}</h4>
                                <ul className='productDesc'>
                                    {item && Object.entries(item).map(([key, i]) => (
                                        // console.log("specification",key, i)
                                        <li key={key}><label>{key}: </label><div className=''><b>{textModifier(key)} : </b>{i}</div></li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                        ))}
                           </div>
                    </Tab>
                    <Tab eventKey="features" title="Features & Options">
                       

                            {detail.features && Object.entries(detail.features).map(([index, item]) => (
                                // <img src={item} className='img-fluid my-3' />
                             

                                    <div className='detail-section'>
                                        <h4 className='detail-title'>{textModifier(index)}</h4>
                                        <ul className='productDesc'>
                                            {item && Object.entries(item).map(([key, i]) => (
                                                <li><label>{key}: </label><div className='value'>{textModifier(key)} : {i}</div></li>
                                            ))}
                                        </ul>
                                    </div>
                          
                            ))}
                     
                    </Tab>
                </Tabs>
            </div>

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