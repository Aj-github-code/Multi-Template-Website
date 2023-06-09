import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Footer from './components/footer/footer';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import ProductListing from './pages/productListing';
import ProductDetails from './components/productDetails/productDetails';
import VehicleListing from './pages/vehicleListing';
import VehicleDetails from './components/productDetails/vehicleDetails';
import FloatingIcons from './components/floatingIcons/floatingIcons';
import Loader from './components/loader/loader';

import Crypt from '../../../js/Services/Crypt';

import Api from './services/api';
// import Api from '../api';

import  {API_CONSTANTS}  from './assets/config/constants';

import Toast from './assets/tools/Toast';
import Swal from 'sweetalert2';
import TestRide from './pages/TestRide';
import ServiceBooking from './pages/ServiceBooking';


function FrontEnd() {

  const [loading, setLoading] = useState(true);
  // localStorage.clear();
  var StoredSetup = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`))
  const [setup, setSetup] = React.useState(StoredSetup);
  const [logos, setLogo] = React.useState('logo-tvs.png');
  const [aboutUs, setAboutUs] = React.useState([]);
  const [footer, setFooter] = React.useState({});
  const [vehicles, setVehicles] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [menus, setMenus] = React.useState([]);

  const response =  {
    "status": "success",
    "data": [
        {
            "id": "1",
            "type": "frontend",
            "module_name": "Website",
            "config": "{\"site_settings\":{\"logo\":\"logo-tvs.png\",\"color\":{\"primary\": \"#840900\",\"backgound\": \"#4b74a1\",\"dark\":\"#1f2e43\"},\"title\": \"PRIMARY KEY TECHNOLOGIES\",\"Subtitle\":\"Your Technical Consultant\"}}",
            "created": "2022-12-16 04:48:19",
            "modified": "2022-12-16 04:54:34",
            "created_by": "0",
            "modified_by": "0",
            "is_active": "1"
        },
        {
            "id": "2",
            "type": "frontend",
            "module_name": "Home",
            "config": null,
            "created": "2022-12-17 12:11:33",
            "modified": "0000-00-00 00:00:00",
            "created_by": "0",
            "modified_by": "0",
            "is_active": "1"
        }
    ]
  }
  

  const apiCtrl = new Api;


    const getSiteSetup = () => {
      // window.sessionStorage.setItem(`${API_CONSTANTS.subdomain}_company`,'')
      // console.table('Setup response', localStorage.getItem(`${API_CONSTANTS.subdomain}`));
      if(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company`)){
        // console.log('Company Data', window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company`))
        var data = {};
        var response = JSON.parse(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company`));
        if(response.data.length > 0){
          response.data.map((value, key)=>{
            data[value.module_name.toLowerCase()] = {
              id: value.id,
              module_name: value.module_name,
              config: JSON.parse(value.config),
              is_active: value.is_active,
            }
            
          })
          var storage = {};
          storage = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`));
          storage = {
            ...storage, 
            modules:data
           }
          localStorage.setItem(
            `${API_CONSTANTS.subdomain}`, 
              JSON.stringify({
                ...storage
              })
            )
            setLogo((typeof data.website.config.site_settings.logo !== 'undefined') ? data.website.config.site_settings.logo : 'logo-tvs.png');
          // localStorage.setItem(`${API_CONSTANTS.subdomain}`,JSON.stringify(storage) )
          setSetup(JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`)));
          return true;
        } else {
          return false;
        }
        // Toast({text:response.message+'!', type:'success'})
   
      } else {
          apiCtrl.callAxios(API_CONSTANTS.setupList, []).then((response)=>{
            // console.log('Response', response);
            if(response.success){
              var data = {};
              window.sessionStorage.setItem(`${API_CONSTANTS.subdomain}_company`,  JSON.stringify({...response}))
              response.data.map((value, key)=>{
              data[value.module_name.toLowerCase()] = {
                id: value.id,
                module_name: value.module_name,
                config: JSON.parse(value.config),
                is_active: value.is_active,
              }
              
               })
            // Toast({text:response.message+'!', type:'success'})
        
              var storage = {};
              storage = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`));
              storage = {
                ...storage, 
                modules:data
                }
              localStorage.setItem(
                `${API_CONSTANTS.subdomain}`, 
                  JSON.stringify({
                    ...storage
                  })
                )
                setLogo((typeof data.website.config.site_settings.logo !== 'undefined') ? data.website.config.site_settings.logo : 'logo-tvs.png');
              // localStorage.setItem(`${API_CONSTANTS.subdomain}`,JSON.stringify(storage) )
              setSetup(JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`)));
              
            }
          // console.log('Storage ---' , JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`)))
          
        })
      }
    }

    // function parseJwt(token){        
    //   const decode = JSON.parse(atob(token.split('.')[1]));
    //   // console.log('Decode', decode.exp);
    //   if ((decode.exp * 1000) < new Date().getTime()) {
    //     alert('Session Timeout Due To In-Activity', 'Please Login Again');
    //     localStorage.clear()
    //     navigation('/')
    //     location.reload('/')
    //   }
    // }

    
    // const cryptCtrl = new Crypt;
    // if((localStorage.getItem('_token_aitechiez') !== 'undefined') && (localStorage.getItem('_token_aitechiez') !== null)){
    //   parseJwt(cryptCtrl.decrypt(localStorage.getItem('_token_aitechiez')))
    // }
  useEffect(()=>{
    

    
    if((setup !== null) ){
      if((typeof setup.modules !== 'undefined')){
        if((setup.modules.website !== null) && (setup.modules.website !== '')){
          const { color, title, logo, subtitle } = setup.modules.website.config.site_settings;
          var storage = {};
          setLogo(logo);
          storage = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`));
          storage = {
            ...storage, 
            title: title, 
            subtitle: subtitle, 
            logo: logo
           }
          localStorage.setItem(
            `${API_CONSTANTS.subdomain}`, 
              JSON.stringify(
                storage
              )
            )
          
          document.documentElement.style.setProperty('--bs-primary', `${color.primary}`);
          document.documentElement.style.setProperty('--primaryBg', `${color.backgound}`);
          document.documentElement.style.setProperty('--primaryDark', `${color.dark}`);
          
        } else {

          // getSiteSetup();
        }
      } else {

        // getSiteSetup();
      }

      
    } 
    // else {

    // }
    getSiteSetup();
    var res;
    if(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company_data`)){
       res = JSON.parse(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company_data`))
      const data = [
        {
            image: res.about_company_image,
            title: 'About',
            description: res.about_company,
            isReverse: true
        },   
        {
            title: 'Mission',
            image: res.company_mission_image,
            description: res.company_mission,
            isReverse: false
        },
        {
            title: 'Vision',
            image:  res.company_vision_image,
            description: res.company_vision,
            isReverse: true
        }
      ];
      setAboutUs(data);
      var footerData = {
        image: res.logo,
        description: res.about_company
      }
      setFooter({...footerData})
    } else {
      apiCtrl.callAxiosGet(`/company/view/${API_CONSTANTS.subdomain}`).then((response)=>{
          // console.log('About US Response', response)
        if(response.success == true){
            const res = response.data;
            window.sessionStorage.setItem(`${API_CONSTANTS.subdomain}_company_data`, JSON.stringify({...res}))
            const data = [
                {
                    image: res.about_company_image,
                    title: 'About',
                    description: res.about_company,
                    isReverse: true
                },   
                {
                    title: 'Mission',
                    image: res.company_mission_image,
                    description: res.company_mission,
                    isReverse: false
                },
                {
                    title: 'Vision',
                    image:  res.company_vision_image,
                    description: res.company_vision,
                    isReverse: true
                }
              ];
              setAboutUs(data);
              var footerData = {
                image: res.logo,
                description: res.about_company
              }
              setFooter({...footerData})
              //  setLogo(res.logo)
              //  console.log('Abut us Res',data)
              
            // this.setState(...response.data);
        }
      })

    }

    // console.log('About us',res)
      // console.log('Final Setup', setup)    
      getVehiclesMenu();
      getProductCategory();
      getMenus();
  },[])

  
  const getVehiclesMenu = () => {
    apiCtrl.callAxiosGet(`/vehicle/get-vehicle-make-model-type`).then((response)=>{
        if(response.success == true){
            const res = response.data;
            
            setVehicles(res)
        }
    })
}

const getProductCategory = () => {
  apiCtrl.callAxios(`/product/product-category-list`, {is_service: '1'}).then((response)=>{
    if(response.success == true){
      const res = response.data;
            
      setProduct(res)
    }
  })
}
  const getMenus = () => {
    apiCtrl.callAxios('/navigation', {}).then((res)=>{
      setMenus(res.data)
      
      // sessionStorage.setItem(`${API_CONSTANTS.subdomain}-menus`, JSON.stringify(res.data));
  })
  }

  return (
    <Router>
      <Loader loading={loading} />
      <Header logo={logos} vehicles={vehicles} products={product} menus={menus} />
      <FloatingIcons />
      <Routes>
        <Route path='/' exact element={<Home loader={(state)=>{setLoading(state)}} />}  />
        <Route path='/about' element={<AboutUs loader={(state)=>{setLoading(state)}} aboutUs={aboutUs} />} />
        {/* <Route path='/service' element={<Services loader={(state)=>{setLoading(state)}} />} /> */}
        <Route path='/gallery' element={<Gallery loader={(state)=>{setLoading(state)}} />} />
        <Route path='/contact' element={<Contact loader={(state)=>{setLoading(state)}} aboutUs={JSON.parse(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company_data`))}  />} />
        <Route path='/product/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        <Route path='/product/:category/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        <Route path='/product/:category/:category/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        <Route path='/product/:category/:category/:category/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        <Route path='/product/:category/:category/:category/:category/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        <Route path='/product/:category/:category/:category/:category/:category/:category' element={<ProductListing loader={(state)=>{setLoading(state)}} />} />
        {/* <Route path='/products' element={<ProductListing />} /> */}
        <Route path='/product/:category/:slug' element={<ProductDetails loader={(state)=>{setLoading(state)}} />} />
        <Route path='/vehicle/:category/:type' element={<VehicleListing loader={(state)=>{setLoading(state)}} />} />
        {/* <Route path='/products' element={<ProductListing />} /> */}
        <Route path='/vehicle/:category/:type/:slug' element={<VehicleDetails loader={(state)=>{setLoading(state)}} />} />
        <Route path="/test-ride" element={<TestRide loader={(state)=>{setLoading(state)}}/>}/>
        <Route path='/service' element={<ServiceBooking loader={(state)=>{setLoading(state)}}/>}/>
      </Routes>
      <Footer aboutUs={footer}/>
    </Router>
  );
}

export default FrontEnd;