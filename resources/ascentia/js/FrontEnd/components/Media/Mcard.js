import React from "react"

const Mcard = ({ item: { cover, para } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>
        <div className='details'>
          <p>{para}</p>
        </div>

      </div>
    </>
  )
}

export default Mcard