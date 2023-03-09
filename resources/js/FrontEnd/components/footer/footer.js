import React, { Component } from "react";

import { Nav } from "react-bootstrap";
import './footer.css';
import Api from "../../services/api";
import textModifier from "../../services/textModifier";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            showMore: false,
            aboutUs: this.props.aboutUs,
            vehicles: [
                {
                    vehicle_status: 'new',
                    types: [
                        {
                            vehicle_type: 'Bike',
                        },
                        {
                            vehicle_type: 'Car',
                        }
                    ]
                },
                {
                    vehicle_status: 'used',
                    types: [
                        {
                            vehicle_type: 'Bike',
                        },
                        {
                            vehicle_type: 'Scooter',
                        }
                    ]
                }
            ]
        };
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.vehicles !== this.props.vehicles){
            if(this.props.vehicles !== [] && this.props.vehicles !== {}){

                this.setState({vehicles: this.props.vehicles})
            }
        }
    }
    render() {
        // return (
        //     <footer className="footer">
        //         <div className="footer-jk">
        //             <p className="footer-para">© TVS All Rights Reserved - 2022</p>
        //         </div>
        //     </footer>
        // );
        return (
            <footer className="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4 align-footer">
                            <img src={ this.props.aboutUs.image ? this.props.aboutUs.image :  "../../assets/images/logo-tvs.png" } className="mb-3" />
                            <p className="footer-desc">
                                {
                                (typeof this.props.aboutUs.description !== 'undefined') &&
                                  (this.state.showMore ?
                                        <>
                                            {this.props.aboutUs.description }
                                            <button onClick={(e)=>this.setState({showMore:false})} style={{borderRadius: '12px', marginLeft:'10px'}}  >Show Less</button>
                                        </>
                                    :
                                        <>
                                            {this.props.aboutUs.description.substr(0, 200)+'...'}
                                            <button onClick={(e)=>this.setState({showMore:true})}  style={{borderRadius: '12px', marginLeft:'10px'}} >Show More</button>
                                        </>)                    
                                }
                                {/* RANGARAYA AUTOMOTIVES TVS is one of the fastest growing Authorised Dealer for TVS 2 Wheelers. Endowed with a state-of-the-art dealership and highly skilled Marketing and Service Staff, we have devoted ourselves to helping and serving our customers to the best of our ability. */}
                            </p>
                        </div>
                        <div className="col-md-3 align-footer">
                            <h4 className="mb-4 mt-3">Quick Links</h4>
                            <ul className="footer-links">
                                <li>
                                    <Nav.Link href="/about">About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/service">Service</Nav.Link>
                                </li>
                                {/* <li>
                                    <Nav.Link href="/products">Products</Nav.Link>
                                </li> */}
                                {/* <li>
                                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                                </li> */}
                                <li>
                                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 align-footer">
                            <h4 className="mb-4 mt-3">Products</h4>
                            <ul className="footer-links">
                                <li>
                                    <Nav.Link href="/product/Accessories">Accessories</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/product/Oil & Lubricants">Oil & Lubricants</Nav.Link>
                                </li>
                             
                            </ul>
                        </div>
                         <div className="col-md-2 align-footer">
                            <h4 className="mb-4 mt-2">Vehicle</h4>
                            <ul className="footer-links">
                                {
                                    this.state.vehicles.map((value, index)=>{
                                        return(
                                            
                                            value.types.map((val, ind)=>{
                                                return(
                                                    <li>
                                                        <Nav.Link key={index} href={`/vehicle/${value.vehicle_status}/${val.vehicle_type}`}>{textModifier(`${value.vehicle_status} ${val.vehicle_type}`)}</Nav.Link>
                                                    </li>
                                                )
                                            })
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {/* <div className="col-md-2 align-footer">
                            <button className="btn btn-white mt-4">Book Online</button>
                        </div> */}
                    </div>
                </div>
                <div className="footer-jk">
                    <p className="footer-para">© TVS All Rights Reserved - 2022</p>
                </div>
            </footer>
        );
    }
}

export default Footer;