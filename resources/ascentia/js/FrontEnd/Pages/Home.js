import React, { useEffect } from 'react'
import HomeSlider from'../components/Home/HomeSlider/HomeSlider'

import HomeAbout from '../components/Home/HomeAbout/HomeAbout'
import Product from '../components/Home/Product/Product'
import Product_prepare from '../components/Home/Product_prepare/Product_prepare'
import Api from '../services/api'
import { API_CONSTANTS } from '../assets/config/constants'
import { useState } from 'react'

function Home() {
 const [bannerdata,setBannerdata]=useState({})
 const [aboutUs, setAboutUs] = React.useState([]);
 const  apiCtrl = new Api;
  useEffect(()=>{
    apiCtrl.callAxios('/slider/list','',false).then((response)=>{
            
      if(response.success == true){

        console.log("res=>",response)
          setBannerdata({...response.data});
      }

      
      // this.props.loader(false)

    })


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
        // {
        //     title: 'Mission',
        //     image: res.company_mission_image,
        //     description: res.company_mission,
        //     isReverse: false
        // },
        // {
        //     title: 'Vision',
        //     image:  res.company_vision_image,
        //     description: res.company_vision,
        //     isReverse: true
        // }
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
                // {
                //     title: 'Mission',
                //     image: res.company_mission_image,
                //     description: res.company_mission,
                //     isReverse: false
                // },
                // {
                //     title: 'Vision',
                //     image:  res.company_vision_image,
                //     description: res.company_vision,
                //     isReverse: true
                // }
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
  
  },[])
  return (
    <>
       <HomeSlider data={bannerdata}/>
      <HomeAbout homeabout={aboutUs}/>
      <Product/>
      <Product_prepare/>
     
      
    </>
  )
}

export default Home