import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import './HomeSlider.css'
import { useState } from "react";

import { useEffect } from "react";
const sliders = [
  {
    id: 1,
    image_name_1: "HomeSlider.jpg",
    image_name_2: "home1.png",
    text_1: "homeslider 1",
    text_2: "homeslider 2",
    link: "https://www.amazon.in/Safild-Sulphate-Free-Hair-Cleanser/dp/B0893T4GCQ/ref=sr_1_4?m=A2JE8YIUA7EXA0&marketplaceID=A21TJRUUN4KGV&qid=1666357693&s=merchant-items&sr=1-4",
    is_active: true
  },
  {
    id: 2,
    image_name_1: "HomeSlider2.jpg",
    image_name_2: "home2.png",
    text_1: "homeslider 2",
    text_2: "homeslider 3",
    link: "https://www.amazon.in/Nersiol-Defenskin-Premium-Body-Oil/dp/B08F419KN8/ref=sr_1_5?crid=2894FYYBJI21I&keywords=Nersiol+DEFENSKIN+-+Premium+Body+Oil&qid=1666357167&qu=eyJxc2MiOiIwLjY0IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=nersiol+defenskin+-+premium+body+oil%2Caps%2C248&sr=8-5",
    is_active: true
  },
  {
    id: 3,
    image_name_1: "HomeSlider3.jpg",
    image_name_2: "home3.png",
    text_1: "homeslider 3",
    text_2: "homeslider 3",
    link: "https://www.amazon.in/Safild-Sulphate-Free-Irritant-Facial/dp/B0893S2696/ref=sr_1_6?crid=1B73QQ6XH0P99&keywords=safild+non-irritant+facial+wash&qid=1666357600&qu=eyJxc2MiOiIwLjk3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=safild+non-irritiant+facial+wash%2Caps%2C569&sr=8-6",
    is_active: true
  },
  {
    id: 4,
    image_name_1: "HomeSlider4.jpg",
    image_name_2: "home4.png",
    text_1: "homeslider 1",
    text_2: "homeslider 1",
    link: "https://www.amazon.in/Nersiol-Sticky-Colour-Protection-Hair/dp/B0892WWB9L/ref=sr_1_1?m=A2JE8YIUA7EXA0&marketplaceID=A21TJRUUN4KGV&qid=1666357693&s=merchant-items&sr=1-1",
    is_active: true
  }
]
// import img1 from "../../../images/HomeSlider.jpg";
// import img2 from "../../../images/HomeSlider2.jpg";
// import img3 from "../../../images/HomeSlider3.jpg";
// import img4 from "../../../images/HomeSlider4.jpg";

const Products = (props) => {
const [slideData,setSlideData]=useState({})

useEffect(()=>{
   
  setSlideData(props.data)
},[props.data])
 
  return (

    <Carousel className="mainslider">
      

      {Object.keys(slideData).length>0&& Object.entries(slideData).map(([key,item])=>{

       
        return(<>
               
          {/* <Mcard key={item.id} item={item} /> */}
          <Carousel.Item  key={item.id+key +item.title}>
            <img
              className="d-block w-100 slider-img"
              src={item.image ? item.image : item.url}
           
              alt={item.title1 ? item.title1 : item.title}
            />
          </Carousel.Item>

        </>)
      })}

    
    </Carousel>




    // <Carousel className="mainslider">
    //   {sliders.map((slider) => {
    //     // return <Mcard key={item.id} item={item} />
    //     return <Carousel.Item interval={300000} className="carouselitem" key={slider.id}>
    //       <a href={slider.link}>
    //         <img className="d-block w-100 slider-img" src={`images/sliders/${slider.image_name_1}`} alt={slider.text_1} />
    //         <img className="slider-img2" src={`images/sliders/${slider.image_name_2}`} alt={slider.text_2} />
    //       </a>
    //       <div className="btnhome">
    //         <a href={slider.link} className='slider-btn homebutton'>
    //           Shop Now</a>
    //       </div>
    //     </Carousel.Item>
    //   })}

      
    // </Carousel>
  );
}

export default Products;