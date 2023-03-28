
import React, { useState } from "react";
import './serviceBook.css'
import Swal from "sweetalert2";
import Api from "../../services/api";

const ServiceBook =()=>{

    const [state,setState]=useState({})
    const [term,setTerm]=useState(true)
    const [errors,setErrors]=useState({})
    const apiCtrl= new Api

    
    const validation = {
  

        name:{required:true,min:1,max:20 ,type:'alpha'},
        contact:{required:true,min:10,max:10 ,type:'Numeric'},
        email:{required:true,min:6, type:'email'}, 
        branch:{required:true},
        service:{required:true},
        vehicle_model:{required:true,min:3,max:20 ,type:'Numeric'},
        vehicle_number:{required:true,min:1,max:20 ,type:'AlphaNumeric'},
        kilometer:{required:true,min:1,max:20 ,type:'Numeric'},
        date:{required:true},
        time:{require:true}
    }
    const submit=(e)=>{
      
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
            phone:state.contact,
            email:state.email,
             date:state.date,
             time:state.time,
             branch:state.branch,
             service:state.service,
             kilometer:state.kilometer,
          
            enquiry_type: 'service',

            data:{

                user:{
                    name:state.name,
                    phone:state.contact,
                    email:state.email,
                     date:state.date,
                     time:state.time,
                     branch:state.branch,
                     service:state.service,
                     kilometer:state.kilometer,
    
                },
                vehicle:{
                    vehicle_number:state.vehicle_number,
                    vehicle_model:state.vehicle_model
    
                },
                time:state.time,
                date:state.date

            }
            
           

        }

       
        apiCtrl.callAxios('/enquiry/create-update', data).then((res)=>{
            if(res.success == true){
                Swal.fire({
                    title: 'Service',
                    text: res.message,
                    icon: 'success',
                    showConfirmButton: false
                })
                // var data = {
                //     name: '',
                //     phone: '',
                //     email: '',
                //     remark: '',
                // }
               setTimeout(()=>{window.location.reload()}, 1500);
            } else {
                Swal.fire({
                    title: 'Service',
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

        //console.log("value",e.target.value,"name",e.target.name)
       
      //  setState(old=>({...old,[e.target.name]:e.target.value}))
    }

    

    console.log("State==>",state)


    return(<>

<section>

<div className="container">


    <div className="row mb-4 section-of-servicebook">
        
        <div className="col-md-12 d-flex justify-content-center">
             <h2 className="section-title ">Book Service Appointment</h2>
             
        </div>
       
      

    </div>

    <div className="row">
        <div className="col-md-6 enquiry-img">

            {/* <img  className="modal-img" src={"https://akgandhi.in/img/bs-vi-range.jpg"} /> */}
            <img className="modal-img"  src={"https://akgandhi.in/img/tvs-credit-new.jpg"}/>
        

        </div>
        <div className="col-md-6 mt-4" >
            <div className="row ">
                <div className="col-md-12 mb-3">
                    <select class="form-select" aria-label="Default select example"
                      onChange={(e)=>setState(old=>({...old,branch:e.target.value}))} 
                      value={state.branch?state.branch:''}
                     
                    >
                        <option selected>Select Branch</option>
                        <option value="pune">Pune</option>
                        <option value="mumbai">Mumabi</option>
                        <option value="surat">Surat</option>
                       {/* <datalist id="data">
                            {branch.map((item, key) =>
                                <option key={key} value={item.label} />
                            )}
                        </datalist> */}
                    </select>
                    <span style={{color: 'red',position:"initial"}} >{errors.branch?errors.branch:""}</span>
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="text" 
                    name="name"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder=" Your NAME" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.name?errors.name:""}</span>
              
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="text" 
                    name="contact"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Contact" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.contact?errors.contact:""}</span>
              
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="email" 
                    name="email"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Email" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.email?errors.email:""}</span>
              
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="text" 
                    name="vehicle_number"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Vehicle No" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.vehicle_number?errors.vehicle_number:""}</span>
              
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="text" 
                    name="vehicle_model"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Vehicle Model" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.vehicle_model?errors.vehicle_model:""}</span>
              
                </div>
                <div className="col-md-12 mb-3">
                <input 
                    type="text" 
                    name="kilometer"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Kilometer" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.kilometer?errors.kilometer:""}</span>
              
                </div>

                <div className="col-md-12 mb-3">
                    <select class="form-select" aria-label="Default select example"
                       onChange={(e)=>setState(old=>({...old,service:e.target.value}))}
                       value={state.service?state.service:''}
                     
                    >
                        <option selected>Select Type Of Service</option>
                        <option value="warranty service">Warranty Service</option>
                        <option value="paid service">Paid Service</option>
                        <option value="accidental service">Accidental Service</option>
                       {/* <datalist id="data">
                            {branch.map((item, key) =>
                                <option key={key} value={item.label} />
                            )}
                        </datalist> */}
                    </select>
                    <span style={{color: 'red',position:"initial"}} >{errors.service?errors.service:""}</span>
                </div>

                <label>Date & Time</label>

                <div className="col-md-6 mb-3">
                <input 
                    type="date" 
                    name="date"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Kilometer" 
                    id="exampleInputName"/>
                         <span style={{color: 'red',position:"initial"}} >{errors.date?errors.date:""}</span>
              
                </div>
                <div className="col-md-6 mb-3">
                <input 
                    type="time" 
                    name="time"
                    class="form-control" 
                    onChange={handleChange}
                   
                    placeholder="Kilometer" 
                    id="exampleInputName"/>
                    <span style={{color: 'red',position:"initial"}} >{errors.time?errors.time:""}</span>
              
                </div>

                <div className="col-md-12 mb-3 d-flex justify-content-center ">

                <button type="button" class="btn btn-primary btn-lg" onClick={submit}>BOOKN APPOINTMENT</button>
                
                </div>
               
            </div>

           

           

        

        </div>

    </div>

</div>


</section>


    </>)

}


export default ServiceBook