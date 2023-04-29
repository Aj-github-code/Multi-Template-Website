import React from "react"
import "./HomeAbout.css"

const HomeAbout = (props) => {

    const data =props.homeabout
    // console.log("dataabout=>",data)
  return (
    <>
      <section className='aboutSection'>
        <div className='container'>
          <div className="row align-items-center">
            {
              data.length>0&&data.map((item,index)=>{
                return(<>
                  <div className="col-md-6">
                    <img src={item.image} alt='' className='img-fluid' />
                  </div>
                  <div className="col-md-6">
                    <div className="ps-sm-5">
                      <h1>{item.title}</h1>
                      <p>
                        {item.description}
                      </p>
                    </div>

                  </div>
                </>)
              })
            }
           
          </div>
        </div>
      </section>

    
              

    </>
  )
}

export default HomeAbout