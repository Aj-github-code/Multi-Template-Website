import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './header.css';
import logo from '../../assets/images/logo-tvs.png';
import Api from "../../services/api";
import { API_CONSTANTS } from "../../assets/config/constants";
import textModifier from "../../services/textModifier"

class Header extends Component {

    constructor(props) {
        super(props);
        const { location } = props;
        this.apiCtrl = new Api;

        this.state = {
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
            ],
            products: [
                {
                    category_name: 'RSA',
                    slug: 'rsa'
                },
                {
                    category_name: 'Accessories',
                    slug: 'accessories'
                }
            ]
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.vehicles !== this.props.vehicles) {
            if (this.props.vehicles !== [] && this.props.vehicles !== {}) {

                this.setState({ vehicles: this.props.vehicles })
            }

        }
        if (prevProps.products !== this.props.products) {
            if (this.props.products !== [] && this.props.products !== {}) {
                this.setState({ products: this.props.products })
            }
        }
    }

    // getVehiclesMenu(){
    //     this.apiCtrl.callAxiosGet(`/vehicle/get-vehicle-make-model-type`).then((response)=>{
    //         if(response.success == true){
    //             const res = response.data;

    //             this.setState({vehicles: res})
    //         }
    //     })
    // }

    // componentDidMount(){
    //     this.getVehiclesMenu();
    // }


    render() {
        const Url = API_CONSTANTS.URL;

        console.log('vehicles', this.props.vehicles, this.state.vehicles)


        return (
            <header>
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={ logo} className="logo img-fluid" alt="TVS Bike" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="nav-menu" activeKey={location.pathname}>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/service">Service</Nav.Link>
                                {/* <NavDropdown title="Product" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/product/Accessories">Accessories</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/Oil & Lubricants">
                                        Oil & Lubricants
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <NavDropdown title="Products" id="basic-nav-dropdown" >
                                    {
                                        this.state.products.map((value, index) => {
                        
                                            return (
                                                <NavDropdown.Item href={`/product/${value.slug}`} >
                                                    {textModifier(value.category_name.toUpperCase())}
                                                </NavDropdown.Item>
                                            )
                                                      
                                            
                                        })
                                    }
                                </NavDropdown>
                                <NavDropdown title="Vehicles" id="basic-nav-dropdown" >
                                    {
                                        this.state.vehicles.map((value, index) => {
                                            return (
                                                <NavDropdown title={`${value.vehicle_status.toUpperCase()}`} className='text-primary submenu' id="basic-nav-dropdown">
                                                    {
                                                        value.types.map((val, ind) => {
                                                            return (
                                                                <NavDropdown.Item href={`/vehicle/${value.vehicle_status}/${val.vehicle_type}`} >
                                                                    {val.vehicle_type.toUpperCase()}
                                                                </NavDropdown.Item>
                                                            )
                                                        })
                                                    }
                                                </NavDropdown>
                                            )
                                        })
                                    }
                                </NavDropdown>
                                {/* <NavDropdown title="Vehicles" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/vehicle/new">New Bike</NavDropdown.Item>
                                    <NavDropdown.Item href="/vehicle/used">
                                    Used Bike
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                                {/* <Nav.Link href="/vehicle"></Nav.Link> */}
                                <Nav.Link href="/gallery">Gallery</Nav.Link>
                                <Nav.Link href="/test-ride">Test Ride</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <a href="/" className="right-logo">
                            <img src={this.props.logo !== '' ?
                                Url + '/public/upload/setup/' + this.props.logo
                                : logo} className="img-fluid" alt="TVS Bike" style={{paddingLeft:'25px'}} />
                        </a>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;