import React, { Component } from 'react';
import PageTitle from '../components/pageTitle/pageTitle';
import ProductCard from '../components/productCard/productCard';
import products from '../local-json/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from '../services/api';

import withRouter from '../services/withRouter';
import textModifier from '../services/textModifier';

class VehicleListing extends Component {
    constructor(props){
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            vehicles: [],
            category: this.props.params.category ? this.props.params.category : "used",
            type: this.props.params.type ? this.props.params.type : "new",
        }
        
    }
    componentDidMount(){
        
        this.apiCtrl.callAxios(`/vehicle/list`, {vehicle_status: this.state.category, vehile_type: this.state.type}).then((response)=>{
            if(response.success == true){
                const res = response.data.aaData;
                let Vehicles = [];
                console.log('Res', res)
                res.map((value, index)=>{
                   

                        Vehicles = [...Vehicles, {
                            id:value.id,
                            title:value.vehicle_model, 
                            description: value.vehicle_make, 
                            productImage: value.images, 
                            slug: value.vehicle_model,
                            category: this.state.category,
                            type: this.state.type,
                        }];
                    
                })
                this.setState({vehicles: Vehicles})
            }
            this.props.loader(false)
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
                <PageTitle data={textModifier(`${this.state.category} ${this.state.type}`)} />
                <div className='container'>
                    <div className='row'>
            
                        {this.state.vehicles && this.state.vehicles.map(item => (
                            <div className='col-md-3' key={item.id}>
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <h3 className='sectionTitle mb-3'>Related Vehicles</h3>
                    <div className='row'>
                        <Slider {...settings}>
                            {this.state.vehicles && this.state.vehicles.map(item => (
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


export default withRouter(VehicleListing);