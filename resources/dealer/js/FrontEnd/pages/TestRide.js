import React from "react";
import TestRides from "../components/TestRides/TestRides";

const TestRide=(props)=>{

    const loader=props.loader(false);

    return(<>

    <TestRides/>

    </>)

}

export default TestRide