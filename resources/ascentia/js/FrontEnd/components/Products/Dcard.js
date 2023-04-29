import React from "react"
import { Link } from "react-router-dom"
//import Sdata from "./Sdata"

const Cards = ({ item: { id,slug, image, title, desc } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={image} alt='Gallery Image' />

          <Link to={`/singlepage/${id}/${slug}`} className='blogItem-link'>
            <i className='fas fa-external-link-alt'></i>
          </Link>
        </div>
        <div className='ptitle'>
          <h3>{title} </h3>
        </div>
        <div className='desc'>
          <p>{desc}</p>
        </div> 
      </div>
    </>
  )
}

export default Cards