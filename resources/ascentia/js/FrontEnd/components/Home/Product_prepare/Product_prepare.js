import React from 'react'
import "./Product_prepare.css"

function Product_prepare() {
  return (
    <> 
        <div className='mainclass'>
            <div className='heading'>
              <h1>How we prepare them?</h1>
              <p className='paragraph'>
                We prepare our products with love & care! Right from extracting the organic properties of natural ingredients, to safe processing in factory, till the scientific testings in our laboratories & packaging; we indulge in each step of our products' manufacturing, to serve our consumers with the best!

              </p>
            </div>

          <div className='image-container'>
            <img src='/images/MaskGroup1.png' alt='' className='image'/>
            <img src='/images/MaskGroup2.png' alt='' className='image'/>
            <img src='/images/MaskGroup3.png' alt='' className='image'/>
            <img src='/images/MaskGroup4.png' alt='' className='image'/>
          </div>
        </div>
    </>
  )
}

export default Product_prepare

