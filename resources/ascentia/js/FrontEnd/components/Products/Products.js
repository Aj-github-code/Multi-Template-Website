import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/001.jpg";
import img2 from "../../images/002.jpg";
import img3 from "../../images/003.jpg";
import img4 from "../../images/004.jpg";

const Products = () => {
    return(
    <Carousel>
      <Carousel.Item interval={1000}>
        <img  className="d-block w-100"  src={img1}  />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={img2} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} />
       
      </Carousel.Item>
    </Carousel>
    );
}

export default Products;