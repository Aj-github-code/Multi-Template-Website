import "./aboutBody.css"
import React from 'react';

function AboutBody() {
  return (

    <div className="aboutBodyTitle">
      <img src="./images/About/About_Group 36.png" className="aboutbgimg2" alt=" " />
      <div className="container">
        <div className="row pb-5 align-items-center">

          <div className="col-lg-6 mb-4">
            <h2 className="mb-4">R&D</h2>
            <p>All our innovations are based on key insights into consumers’ needs and wants. We aim to develop products that have a purpose and that consumers choose again and again. We work on a comprehensive portfolio of projects, combining the search for breakthrough technologies with the constant drive to respond to consumer demands, and make our products more sustainable.</p>
            <p>To do this, we assemble key consumer trends, leading-edge science, and the application of data and digital technology to deliver extraordinary products, services, and experiences. The products we develop, whether by ourselves or in partnership with leading scientists, academic institutions, suppliers, and specialist businesses, play an essential role in our ambition to make a positive impact.</p>
          </div>
          <div className="col-lg-6">
            <img src="./images/About/About_002.jpeg" className="img-fluid" alt=" " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBody