import React from "react";
import ServiceBook from "../components/ServiceBook/ServiceBook";


const ServiceBooking=(props)=>{

    const loader=props.loader(false);

    return(<>

       <ServiceBook/>

    </>)

}

export default ServiceBooking