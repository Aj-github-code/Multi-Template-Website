import "./aboutBrand.css"
import React from 'react';

function AboutBrand() {
  return (
    <div className="aboutBrandTitle pb-5">
      <div className="container">
        <h1>Brands</h1>

        <div className='brandimage'>
          <img src="./images/About/About_nersion.png" className="aboutimgbrand" alt=" " />
          <img src="./images/About/About_defenskin.png" className="aboutimgbrand" alt=" " />
          <img src="./images/About/About_safild_HC.png" className="aboutimgbrand" alt=" " />
          <img src="./images/About/About_safild_FW.png" className="aboutimgbrand" alt=" " />
        </div>
      </div>
    </div>
  )
}

export default AboutBrand