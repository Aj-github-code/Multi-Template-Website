import "./aboutMain.css"
import React from 'react';


function AboutMain(props) {
  const data=props.aboutmain
  // console.log("aboutmai==>",data)
  return (
    <>
      <img src="./images/About/About_Group 39.png" className="aboutbgimg" alt=" " />

      <div className="container py-5">
        {Object.keys(data).length >0&&
          <div class="container">
            <h1 className="mb-5 text-center">{data.title}</h1>
            <div class="row pb-5 align-items-center">
              <div class="col-lg-6 mb-4">
                <h2 className="mb-4">Brief Company Profile</h2>
                <p>{data.description}</p>
              </div>
              <div class="col-lg-6">
                <img src={data.image} class="img-fluid" alt=" " />
              </div>
            </div>
          </div>
        }
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center mb-3">Passionate Team
              </h2>
              <p className="text-center">Ascentia is led by a management leadership team, committed to change the landscape of personal and healthcare business, through continuous consumer-centric innovations.
              </p>

            </div>
            <div className="row people">
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">PARITOSH MITRA</h3>
                  <p className="title">Director</p>
                  <p className="description">Paritosh is an entrepreneur by heart and passionate about experimentation with ideas; he leads from the front. His people skills and team building capabilities make him a natural leader across various interfaces. Being extremely versatile and an expert at public relations, he drives various initiatives for the company's growth and operations nationally.</p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">KAUSHIK BOSE</h3>
                  <p className="title">Director</p>
                  <p className="description">Kaushik is instrumental in driving "concept to shelf" by launching innovative and differentiated products to address consumer need - gap. He is actively involved in strategy planning and execution of various initiatives to accelerate growth. He served various Indian and Foreign multinational companies in various capacities and holds life membership of many scientific bodies. </p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">BARUN KUMAR CHAKRABORTY</h3>
                  <p className="title">Vice President, Operations and Strategy</p>
                  <p className="description">Barun is responsible for making sales and marketing strategy, and execution by driving various key initiatives of the company to ensure sustainable growth. He has an extensive 35 years of experience with almost 20 years in senior positions in Marketing with some top corporates e.g. Cipla, Bharat Biotech, Helios Pharma, DRS group, Bengal Chemical & Pharmaceuticals to name a few. He was instrumental behind the launch of many key brands in Pharmaceutical and Home Care category during his tenure. Beside this, he worked as a Marketing Advisor and CEO with few Govt. of India Enterprises as well.</p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">SOUMEN SANYAL</h3>
                  <p className="title">Manager, Regional Sales & Business Development</p>
                  <p className="description">Soumen is the key person to drive sales for eastern zone and further reinforce the Sales function. He is also instrumental in developing new business in his territory. Prior to Ascentia, he was working with VVD & Sons for almost 13 years where he was leading the sales function for eastern zone including supply chain and logistics. He is a firm believer of “lead by example” which evokes a strong feeling of passion and motivation amongst his team members.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* <div className="container py-5">
        <div class="container">
          <h1 className="mb-5 text-center">About Us</h1>
          <div class="row pb-5 align-items-center">
            <div class="col-lg-6 mb-4">
              <h2 className="mb-4">Brief Company Profile</h2>
              <p>ASCENTIA is India’s one of the most rapidly growing consumer products manufacturing company, operating in the space of beauty, body-care and wellness. This fruitful journey was initiated by a group of visionary & promising individuals, with a common mindset to design and deliver result-oriented solutions, which will address the unmet needs of the consumers.

                With a humble beginning, Ascentia's corporate office was set up in Kolkata and its flagship brand NERSIOL was launched in 2019. In pursuit of offering differentiated products to consumers, Ascentia introduced its second brand SAFILD to emphasise safe and mild cleansing.</p>
            </div>
            <div class="col-lg-6">
              <img src="./images/About/About_002.jpeg" class="img-fluid" alt=" " />
            </div>
          </div>
        </div>
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center mb-3">Passionate Team
              </h2>
              <p className="text-center">Ascentia is led by a management leadership team, committed to change the landscape of personal and healthcare business, through continuous consumer-centric innovations.
              </p>

            </div>
            <div className="row people">
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">PARITOSH MITRA</h3>
                  <p className="title">Director</p>
                  <p className="description">Paritosh is an entrepreneur by heart and passionate about experimentation with ideas; he leads from the front. His people skills and team building capabilities make him a natural leader across various interfaces. Being extremely versatile and an expert at public relations, he drives various initiatives for the company's growth and operations nationally.</p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">KAUSHIK BOSE</h3>
                  <p className="title">Director</p>
                  <p className="description">Kaushik is instrumental in driving "concept to shelf" by launching innovative and differentiated products to address consumer need - gap. He is actively involved in strategy planning and execution of various initiatives to accelerate growth. He served various Indian and Foreign multinational companies in various capacities and holds life membership of many scientific bodies. </p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">BARUN KUMAR CHAKRABORTY</h3>
                  <p className="title">Vice President, Operations and Strategy</p>
                  <p className="description">Barun is responsible for making sales and marketing strategy, and execution by driving various key initiatives of the company to ensure sustainable growth. He has an extensive 35 years of experience with almost 20 years in senior positions in Marketing with some top corporates e.g. Cipla, Bharat Biotech, Helios Pharma, DRS group, Bengal Chemical & Pharmaceuticals to name a few. He was instrumental behind the launch of many key brands in Pharmaceutical and Home Care category during his tenure. Beside this, he worked as a Marketing Advisor and CEO with few Govt. of India Enterprises as well.</p>
                </div>
              </div>
              <div className="col-md-6 item">
                <div className="box">
                  <img className="rounded-circle" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" />
                  <h3 className="name">SOUMEN SANYAL</h3>
                  <p className="title">Manager, Regional Sales & Business Development</p>
                  <p className="description">Soumen is the key person to drive sales for eastern zone and further reinforce the Sales function. He is also instrumental in developing new business in his territory. Prior to Ascentia, he was working with VVD & Sons for almost 13 years where he was leading the sales function for eastern zone including supply chain and logistics. He is a firm believer of “lead by example” which evokes a strong feeling of passion and motivation amongst his team members.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default AboutMain