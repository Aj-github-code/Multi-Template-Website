import React, { useState, useEffect } from 'react';
// import "@fontsource/montserrat";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Routes,Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Career from "./components/Career/Career"
import Home from "./Pages/Home"
// import Product_sub from "./components/Pages/ProductSinglePage"
import Products from "./components/Products/ProductHome"
import SinglePage from "./Pages/ProductSinglePage"
import Media from "./components/Media/Media"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Header from './common/Navbar/Navbar'
import Footer from './common/Footer/Footer'
import { from } from 'form-data';
import Api from './services/api';

import { API_CONSTANTS } from './assets/config/constants';




function FrontEnd() {
  const [aboutUs, setAboutUs] = React.useState([]);
  const apiCtrl= new Api

  useEffect(() => {

    var res;
    if(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company_data`)){
       res = JSON.parse(window.sessionStorage.getItem(`${API_CONSTANTS.subdomain}_company_data`))

      const data = [
        {
            image: res.about_company_image,
            title: 'About Us',
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
     
      const companydetails={
        meta_description: res.meta_description,
        meta_keyword: res.meta_keyword,
        meta_title: res.meta_title
      }
      setAboutUs(data);
      var footerData = {
        image: res.logo,
        description: res.about_company
      }
      // setFooter({...footerData})
      // setCompanyDtails({...companydetails})
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
              // setFooter({...footerData})
              
        }
      })

    }

  }, []);

  return (
    <Router>
       <Header/>
       <Routes>

        <Route path='/' element={<Home/>  } exact></Route>
        <Route path='/about' element={<About aboutUs={aboutUs}/> }></Route>
        <Route path='/career' element={<Career/>}></Route>
        {/* <Route path='/product' element={Product_sub}></Route> */}
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/singlepage/:id/:slug' element={<SinglePage/>} ></Route>
        <Route path='/media' element={<Media/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>


      </Routes>
        
      <Footer/>
     
    </Router>
    
  );
}

export default FrontEnd;