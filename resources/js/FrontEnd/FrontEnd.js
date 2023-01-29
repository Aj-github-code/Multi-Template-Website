import React, { useEffect } from 'react';
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

import Api from './services/api';

import  {API_CONSTANTS}  from './assets/config/constants';

import Toast from './assets/tools/Toast';
import Swal from 'sweetalert2';

function FrontEnd() {

  
  // localStorage.clear();
  var StoredSetup = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`))
  const [setup, setSetup] = React.useState(StoredSetup);
  const [logos, setLogo] = React.useState();

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
  

  let apiCtrl = new Api;


    const getSiteSetup = () => {
      console.table( localStorage.getItem(`${API_CONSTANTS.subdomain}`));
      
      apiCtrl.callAxios(API_CONSTANTS.setupList, []).then((response)=>{
        
        var data = {};
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
              storage
            })
          )
        localStorage.setItem(`${API_CONSTANTS.subdomain}`,JSON.stringify(storage) )
        setSetup(JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`)));
        
        console.log('Storage' , JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`)))
        
      })
    }



  useEffect(()=>{
    
    
    console.log('Setup', setup)
   
    if((setup !== null) ){
      setLogo(setup.logo);
      console.log('Setup', setup.modules)
      if((typeof setup.modules !== 'undefined')){
        if((setup.modules.website !== null) && (setup.modules.website !== '')){
          const { color, title, logo, subtitle } = setup.modules.website.config.site_settings;
          var storage = {};
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

          getSiteSetup();
        }
      } else {

        getSiteSetup();
      }

      
    } else {

      getSiteSetup();
    }

    
      

     
    

  },[setup])

  return (
    <Router>
      <Header logo={logos}/>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductListing />} />
        <Route exact path='/product/:productID' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default FrontEnd;