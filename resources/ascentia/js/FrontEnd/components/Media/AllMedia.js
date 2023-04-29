import React, { useEffect, useState } from "react"
import "./Media.css"
import Mdata from "./Mdata"
import Mcard from "./Mcard"

const AllMedia = () => {
  const [items, setIems] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setIems(Mdata);
    setCollection([...new Set(Mdata.map((item) => item.type))])
  },[])

  const media_filter = (itemData) => {
    const filterData = Mdata.filter((item) => item.type === itemData);
    setIems(filterData);
  }

  return (
    <>
      <section className='blog allmediatop'>
        <div className='container'>
          <div className='content gridMedia'>
            
            <ul className="webdata">
                <li><button onClick={() => setIems(Mdata)}>- All</button></li>
                {
                    collection.map((item) => <li>- <button onClick={() => {media_filter(item)}}>{item}</button></li>)
                }
            </ul>
            {items.map((item) => {
              return <Mcard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllMedia