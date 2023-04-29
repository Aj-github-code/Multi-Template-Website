import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './header.css';
import logo from '../../assets/images/Aitechiez.png';
import Api from "../../services/api";
import { API_CONSTANTS } from "../../assets/config/constants";
import textModifier from "../../services/textModifier"

class Header extends Component {

    constructor(props) {
        super(props);
        this.apiCtrl = new Api;

        this.state = {
            menu: [],
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

    componentDidMount(){
        if( (sessionStorage.getItem(`${API_CONSTANTS.subdomain}-menus`)!== '') && (typeof sessionStorage.getItem(`${API_CONSTANTS.subdomain}-menus`)!== 'undefined') && (sessionStorage.getItem(`${API_CONSTANTS.subdomain}-menus`)!== null) ){
            this.setState({menu: JSON.parse(sessionStorage.getItem(`${API_CONSTANTS.subdomain}-menus`))})
        } else {
            // this.apiCtrl.callAxios('/navigation', {}).then((res)=>{
            //     this.setState({menu: res.data})
            //     sessionStorage.setItem(`${API_CONSTANTS.subdomain}-menus`, JSON.stringify(res.data));
            // })
        }
        this.getVehiclesMenu();
    }
    getVehiclesMenu(){
        this.apiCtrl.callAxiosGet(`/vehicle/get-vehicle-make-model-type`).then((response)=>{
            if(response.success == true){
                const res = response.data;

                this.setState({vehicles: res})
            }
        })
    }

    // componentDidMount(){
    //     this.getVehiclesMenu();
    // }


    render() {
        const Url = API_CONSTANTS.URL;

        // console.log('vehicles', this.props.vehicles, this.state.vehicles)
        function Menus(menu, slug){
            var slugs ='';
            console.log('Menus ===', menu, slug)

            if(typeof menu.sub_menu === 'undefined'){

                if((menu.length > 0)){
                    
                    return(
                        menu.map((val, ind)=>{
                            if(val.sub_menu.length > 0){

                                return(
                                    <NavDropdown title={`${val.name}`} className='text-primary submenu'id="basic-nav-dropdown" >
                                        { Menus(val.sub_menu, slug) }
                                    </NavDropdown>
                                )
                            } else {
                                return  <NavDropdown.Item href={`/${slug}/${val.slug}`}>{val.name}</NavDropdown.Item>
                            }
                        })
                    )
                } else{
                  
                    <NavDropdown.Item href={`/${slug}`}>{menu.name}</NavDropdown.Item>
                }
            } else {
                
                return(
                    <NavDropdown.Item href={`/${slug}`}>{menu.name}</NavDropdown.Item>
                )
            }
        }

        return (
            <header>
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={ logo} className="logo img-fluid h-70" alt="TVS Bike" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="nav-menu" activeKey={location.pathname}>
                                {/* {
                                    (this.state.menu.length > 0) && this.state.menu.map((val,ind)=>{
                                        if(val.sub_menu.length > 0){
                                            return(
                                                <NavDropdown title={`${val.name}`} id="basic-nav-dropdown" >
                                               { Menus(val.sub_menu, val.slug)}
                                                </NavDropdown>
                                            )
                                        } else {
                                            return( <Nav.Link href={`/${val.slug}`}>{val.name}</Nav.Link>)
                                        }
                                    })
                                } */}
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/service">Service</Nav.Link>
                              
                                <NavDropdown title="Products" id="basic-nav-dropdown" >
                                    {
                                        (typeof this.state.products !== 'undefined') && (this.state.products.length > 0) &&
                                        this.state.products.map((value, index) => {
                        
                                            return (
                                                <NavDropdown.Item key={`product-${index}-${value.slug}`} href={`/product/${value.slug}`} >
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
                     
                                <Nav.Link href="/gallery">Gallery</Nav.Link>
                                <Nav.Link href="/test-ride">Test Ride</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <a href="/" className="right-logo">
                            {/* <img src={this.props.logo !== '' ?
                                Url + '/public/upload/setup/' + this.props.logo
                                : logo} className="img-fluid" alt="TVS Bike" style={{paddingLeft:'25px'}} /> */}
                                {/* <img src={logo} className="img-fluid" alt="TVS Bike" style={{paddingLeft:'25px'}} /> */}
                        </a>
                    </Container>
                </Navbar>
            </header>
        );
    }
}




export default Header;