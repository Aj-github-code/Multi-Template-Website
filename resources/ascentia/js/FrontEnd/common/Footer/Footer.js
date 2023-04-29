import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import Modals from "../../components/Modal"
import { useState } from "react"

const Footer = () => {

  const [modal, setmodal] = useState(false)
  const [name, setName ] = useState()

  const setBoth = (term) => {
    setName(term);
    setmodal(true);
  }
  return (
    <>
      <footer>
      <div className='legal'>
        <div className="icon">
          {/* <div className="row">
          <div className="col-sm-1"></div>

            <div className="col-sm-10"> */}
              <a onClick={() => setBoth("TermsConditions")}>Terms and Conditions</a> | © 2022 Copyright Ascentia All Rights Reserved
            {/* </div>
            <div className="col-sm-4">
                © 2022 Copyright Ascentia All Rights Reserved 
            </div>
            <div className="col-sm-2">  */}
              <ul className="social-icon">
                <a href="https://www.facebook.com/ascentiacosmetics"><i className='fab fa-facebook-f'></i></a>
                <a href="https://mobile.twitter.com/home"><i className='fab fa-twitter'></i></a>
                <a href="https://www.linkedin.com/mwlite/company/ascentia-cosmetics"><i className='fab fa-linkedin'></i></a>
                <a href="https://www.instagram.com/ascentiacosmetics/"><i className='fab fa-instagram'></i></a>
              </ul>
            {/* </div>
            <div className="col-sm-1"> </div>
          </div> */}
        </div>
      </div>
      <Modals toggle={() => setmodal(!modal)} isOpen={modal} name={name}></Modals>
      </footer>
      
    </>
  )
}

export default Footer