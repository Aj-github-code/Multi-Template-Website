import React from "react";
import img from "../../assets/images/loader.svg"

function Loader({loading}) {

    if(loading != true){
        return false;
    }
    return(
        <>
            <img src={img} style={{width:"100%", height:"100%",position: 'fixed', marginTop: '-80px', zIndex:'999999 '}} />
        </>
    )
}
export default Loader;