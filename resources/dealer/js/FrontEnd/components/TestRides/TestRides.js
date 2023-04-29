
import React, { useState } from "react";
import Swal from "sweetalert2";
import Api from "../../services/api";
import './TestRides.css'


const TestRides=()=>{

    const [term,setTerm]=useState(true)
    const [state,setState]=useState({
        enquiry_type: 'test-ride',
           

           

    })

    const [errors,setErrors]=useState({})

    const validation = {
  

        name:{required:true,min:1,max:20 ,type:'alpha'},
        phone:{required:true,min:10,max:10 ,type:'Numeric'},
        email:{required:true,min:6, type:'email'}, 
        pincode:{required:true,min:6,max:6 ,type:'Numeric'},
        state:{required:true,min:3,max:30 ,type:'alpha'},
        city:{required:true,min:3,max:20 ,type:'alpha'},
        vehicle:{required:true,min:1,max:20 ,type:'alpha'},
        variant:{required:true,min:15,max:20 ,type:'alpha'},
        address:{required:true,min:15,max:255 ,type:'AlphaNumeric'},
    }
    const apiCtrl=new Api

    const submitdata=(e)=>{
        e.preventDefault();


        let error = {};
        let isValid = true;
        Object.entries(validation).map(([key,value])=>{

            
            if((typeof state[key] === 'undefined') || (state[key] === null) ) {
                let temp =  key.replace(/_/g, " "); 
                var names = temp
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

                if(value.required === true){
                    error[key] = `${names} Field is Required`;
                    isValid = false;
                }
            } else {
                error[key] = '';
                isValid = true;
            }
            setErrors(old=>({...old,...error})) 
        })

     
        
        if(!isValid){
            return false;
        }
 

        const data={
            name:state.name,
            phone:state.phone,
            email:state.email,
            state:state.state,
            city:state.city,
            pincode:state.pincode,
            address:state.address,
            enquiry_type: 'test-ride',

            data:{

                user:{
                    name:state.name,
                    phone:state.phone,
                    email:state.email,
                    state:state.state,
                    city:state.city,
                    pincode:state.pincode,
                    address:state.address,
    
    
                },
                vehicle:{
                    vehicle:state.vehicle,
                    variant:state.variant
    
                },
                time:state.time

            }
            
           

        }

       
        apiCtrl.callAxios('/enquiry/create-update', data).then((res)=>{
            if(res.success == true){
                Swal.fire({
                    title: 'Contact Us',
                    text: 'Request Submitted',
                    icon: 'success',
                    showConfirmButton: false
                })
                var data = {
                    name: '',
                    phone: '',
                    email: '',
                    remark: '',
                }
               setTimeout(()=>{window.location.reload()}, 1500);
            } else {
                Swal.fire({
                    title: 'Contact Us',
                    text: res.message,
                    icon: 'error',
                    showConfirmButton: false
                })
            }
        })




        

    }
    const validate  = (fieldName, fieldValue) => {
            
        let error={}
        let isValid = true;
        let isMax = 1000;
        if(typeof validation[fieldName] !== "undefined"){
            Object.entries(validation[fieldName]).map(([key,value])=>{
         
                let temp =  fieldName.replace(/_/g, " "); 
                var names = temp
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
          
                if(key === 'required'){
                    if((fieldValue.length < 0) || (fieldValue === '') || (fieldValue === null)){
                        error[fieldName] = `${names} Field is required`
                        isValid = false;
                    } 
                } else if(key === 'min'){
                    if(fieldValue.length < value){
                        error[fieldName] = `${names} must be more than ${value} characters`
                        isValid = false;
                    }
                } else if(key === 'max'){
                    if(fieldValue.length > value){
                        error[fieldName] = `${names} must be less than ${value} characters`
                        isMax = value;
                        isValid = false;
                    }
                } else if(key === 'type'){
                    if(value === 'alpha'){
                        if(!fieldValue.match(/^[A-Za-z\s]*$/)){
                            error[fieldName] = `${names} must be String characters`
                            isValid = false;
                        }
                    } else if(value === 'AlphaNumeric'){
                        if(!fieldValue.match(/^[A-Za-z0-9,-.\s]*$/)){
                            error[fieldName] = `${names} must be String Alpha Numeric`
                            isValid = false;
                        }
                    } else if(value === 'Numeric'){
                        if(!fieldValue.match(/^[0-9]*$/)){
                            error[fieldName] = `${names} must be String Numeric`
                            isValid = false;
                        }
                    } else if(value === 'email'){
                        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                        if(!fieldValue.match(reg) ){
                            error[fieldName] = `${names} must be in Email format`
                            isValid = false;
                        }
                    } 
                       
                }
                if(isValid == true) {
                    
                    error[fieldName] = '';
                }
            })
            setErrors(old=>({...old,...error})) 
           // console.log('Error', errors);
            // console.log('Error NAme', errors.name);
        }
        if(isMax >= fieldValue.length){
           setState((old) => ({...old, [fieldName]: fieldValue }))
            
        }
        // console.log('fieldName', fieldName, 'fieldValue', fieldValue);
    }
    const handleChange=(e)=>{
        validate(e.target.name,e.target.value)
       
        //setState(old=>({...old,[e.target.name]:e.target.value}))
    }

 
     //console.log('Error NAme',errors);


    return(<>

        <section>

            <div className="container">


                <div className="row mb-4 section-header">
                     <img src="https://akgandhi.in/img/login-banner.png"/>
                    <div className="col-md-12 d-flex justify-content-center">
                         <h2 className="section-title ">BOOK A TEST RIDE</h2>
                         
                    </div>
                    <hr className='lines'></hr>
                   
                    <div className="col-md-12 d-flex justify-content-center  ">
                        <p className="section-subtitle">To book your test ride now, kindly fill in your information below.</p>

                    </div>

                  

                </div>

                <div className="row">
                    <div className="col-md-6 enquiry-img">

                        <img  className="modal-img" src={"https://akgandhi.in/img/bs-vi-range.jpg"} />
                        <img className="modal-img"  src={"https://akgandhi.in/img/tvs-credit-new.jpg"}/>
                    

                    </div>
                    <div className="col-md-6 mt-4" >
                        <div className="row ">
                            <div className="col-md-6 mb-3">
                            <input 
                                type="text" 
                                name="name"
                                class="form-control" 
                                onChange={(e)=>{handleChange(e)}} 
                                placeholder="NAME" 
                                id="exampleInputName"/>
                            <span style={{color: 'red',position:"initial"}} >{errors.name?errors.name:""}</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            
                            <input 
                                type="number" 
                                name="phone"
                                placeholder="MOBILE NO" 
                                onChange={(e)=>{handleChange(e)}}  
                                class="form-control" 
                                id="exampleInputMobileNo"/>
                                <span style={{color: 'red',position:"initial"}} >{errors.phone}</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            <input type="text" 
                                placeholder="STATE" 
                                name="state"
                                onChange={(e)=>{handleChange(e)}}  
                                class="form-control" 
                                id="exampleInputState"/>
                            <span style={{color: 'red',position:"initial"}} >{errors.state }</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            <input 
                                type="text"  
                                name="city"
                                placeholder="CITY" 
                                onChange={(e)=>{handleChange(e)}}  
                                class="form-control" 
                                id="exampleInputCity"/>
                                <span style={{color: 'red',position:"initial"}} >{errors.city }</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            <input 
                                type="text" 
                                name="email"
                                placeholder="EMAIL" 
                                onChange={(e)=>{handleChange(e)}}  
                                class="form-control" 
                                id="exampleInputEmail"/>
                            <span style={{color: 'red',position:"initial"}} >{errors.email }</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            <input 
                                type="number" 
                                name="pincode"
                                placeholder="PINCODE" 
                                onChange={(e)=>{handleChange(e)}}  
                                class="form-control" 
                                id="exampleInputPincode"/>
                                <span style={{color: 'red',position:"initial"}} >{errors.pincode }</span>
                            </div>
                            <div className="col-md-6 mb-3">
                            <input type="text" placeholder="VEHICLE" 
                             name="vehicle"
                              onChange={(e)=>{handleChange(e)}}  
                            class="form-control" id="exampleInputPassword1"
                            />
                            <span style={{color: 'red',position:"initial"}} >{errors.vehicle }</span>
                            
                            </div>
                            <div className="col-md-6 mb-3">
                            <input type="text" placeholder="VARIANT" 
                             name="variant"
                             onChange={(e)=>{handleChange(e)}}  
                            class="form-control" id="exampleInputPassword1"/>
                             <span style={{color: 'red',position:"initial"}} >{errors.variant }</span>
                            
                            </div>
                            <div className="col-md-6 mb-3">
                            <textarea 
                                name="address"
                                class="form-control" 
                                onChange={(e)=>{handleChange(e)}}  
                                placeholder="ADDRESS" 
                                id="floatingTextarea"></textarea>
                                <span style={{color: 'red',position:"initial"}} >{errors.address }</span>
                            </div>
                        
                    
                        </div>

                        <div className="row mb-6" style={{marginBottom:"59px"}}>

                            <div className="col-md-12 " onChange={(e)=>{handleChange(e)}}>
                                <p>When are you planning to purchase the vehicle? Please select</p>
                                <input name="time"   checked={state.time == "Within 7 days"}  value="Within 7 days"   type={"radio"}/> 
                                <span>Within 7 days</span>&nbsp;
                                <input  name="time"   checked={state.time == "Within a month"} value="Within a month"   type={"radio"}/>
                                <span> Within a month</span>&nbsp;
                                <input   name="time"   checked={state.time == "After a month"} value="After a month"  type={"radio"}/>
                                <span>After a month</span>&nbsp;
                                <input  name="time"   checked={state.time == "Not decided"}  value="Not decided"  type={"radio"}/>
                                <span>Not decided</span>&nbsp;
                                

                            </div>
                        
                        


                        </div>

                        <div className="row">

                            <div className="col-md-12">
                            <input onChange={(e)=>setTerm(e.target.checked?false:true)} type={"checkbox"} />
                            <span>I accept the <span style={{color:"blue"}}>terms & conditions</span> and authorise TVS Dealer to contact me via SMS, email, WhatsApp and other modes of communication.</span>


                            </div>
                            <div className="col-md-12 d-flex justify-content-end">

                            <button type="button" disabled={term} class="btn btn-primary" onClick={submitdata}>Book</button>

                            </div>

                        
                        </div>

                    

                    </div>

                </div>

            </div>

           
        </section>
    </>)
}

export default TestRides