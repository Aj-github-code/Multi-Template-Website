import React from 'react'
// import WebpageVideo from '../../../Videos/WebpageVideo.mp4';
// import WebpageVideo from '../../../Videos/WebpageVideo.'

function Product() {
  return (
      <video autoPlay loop muted style={{ width:"100%"}}>
        <source src={"./videos/WebpageVideo.mp4"} type="video/mp4" />
      </video>
  )
}

export default Product