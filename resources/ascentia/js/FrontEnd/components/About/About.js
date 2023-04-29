
import React from 'react';
import "./about.css"
import AboutMain from "./AboutMain"
import AboutBody from "./AboutBody"
import AboutBrand from "./AboutBrand"
function About(props) {
  const data =props.aboutUs
  var aboutmain={}
  if(data.length>0){
    data.map((item,key)=>{
       if(item.title=="About Us"){
        aboutmain={
          description:item.description,
          title:item.title,
          image:item.image,
          isReverse:item.isReverse



        }
       }
    })
  }
  return (
  <>
  <div className="mainabout">
    <AboutMain aboutmain={aboutmain}/>
    <AboutBody/>  
    <AboutBrand/>
    </div>
  </>
  )
}

export default About