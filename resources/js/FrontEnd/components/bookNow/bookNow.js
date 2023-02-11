import React, { useState } from "react";
import { Box, Divider } from '@mui/material';
import { Button } from 'react-bootstrap';
import "./bookNow.css"
import Api from "../../../api";
import Swal from "sweetalert2";

const BookNow = ({image1, image2, header, type}) =>{

    const apiCtrl = new Api;

    const [state, setState] = useState({enquiry_type: type});
    const [errors, setErrors] = useState({});

    const validation = {
  

        name:{required:true,min:1,max:20 ,type:'alpha'},
        phone:{required:true,min:10,max:10 ,type:'Numeric'},
        email:{required:true,min:6, type:'email'}, 
        pincode:{required:true,min:6,max:6 ,type:'Numeric'},
        state:{required:true,min:3,max:30 ,type:'alpha'},
        city:{required:true,min:3,max:20 ,type:'alpha'},
        address:{required:true,min:15,max:255 ,type:'AlphaNumeric'},
    }

    const validate = (fieldName, fieldValue) => {
            
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
            console.log('Error', errors);
            console.log('Error NAme', errors.name);
        }
        if(isMax >= fieldValue.length){
           setState((old) => ({...old, [fieldName]: fieldValue }))
            
        }
        console.log('fieldName', fieldName, 'fieldValue', fieldValue);
    }
    
    const handleChange = (e) => {

        validate(e.target.name,e.target.value)

    }

    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // Object.entries(state).map(([index, value])=>{
        //     if(value == null || (typeof value === 'undefined')){
        //         errors = {...errors,  [index]:'error'}
        //     }
        // })
        // setState({errors:errors})
        // console.log(state)
        // console.log(errors);
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
            // var data = {
            //     name:{required:true,min:1,max:20 ,type:'alpha'},
            //     phone:{required:true,min:9,max:10 ,type:'Numeric'},
            //     email:{required:true,min:6, type:'email'}, 
            //     pincode:{required:true,min:5,max:6 ,type:'Numeric'},
            //     state:{required:true,min:3,max:30 ,type:'alpha'},
            //     city:{required:true,min:3,max:20 ,type:'alpha'},
            //     address:{required:true,min:15,max:255 ,type:'AlphaNumeric'},

              
            //     title: state.name,
            //     email: state.email,
            //     description: state.description
            // }
            apiCtrl.callAxios('enquiry/create-update', state).then((res)=>{
                if(res.success == true){
                    Swal.fire({
                        title: 'Contact Us',
                        text: 'Request Submitted',
                        icon: 'success',
                        showConfirmButton: false
                    })
                   
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

    return(
    <>
    <div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
                    
            {/* <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Book</h5>
                <div className="row ml-1" style={{ paddingTop: '2%'}}>
                </div>
                <button type="button"   data-bs-dismiss="modal" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> */}
              
              <div className="modal-body m-body">
                

              {/* <div className="modal-footer">
                      
    
                      <Button data-bs-dismiss="modal" style={{ backgroundColor: 'rgb(108 110 116)',color:"#fff"}}>Close</Button>&nbsp;&nbsp;
                    
              
                      {/* <Button data-bs-dismiss="modal" style={{ backgroundColor: '#183883',color:"#fff"}} onClick={ submituser }>Submit</Button> 
                    
                    </div>*/}

     
                {/* <Box sx={{ width: '100%', height: '100%', typography: 'body1', backgroundColor:'white', borderRadius:"6px", padding: '2%' }}> */}

                    <div className="row">
                        <h3 className="text-center modal-heading mb-5" >{header}</h3>

                        </div>

                        <div className="row">
                            <div className="col-md-6" style={{height:"400px"}}>

                                <img  className="modal-img" src={image1} />
                                <img className="modal-img"  src={image2}/>
                            

                            </div>
                            <div className="col-md-6" style={{height:"400px"}}>

                                <div className="col-md-12 mb-3">
                                <input 
                                    type="text" 
                                    name="name"
                                    class="form-control" 
                                    onChange={(e)=>{handleChange(e)}} 
                                    placeholder="NAME" 
                                    id="exampleInputName"/>
                               <span style={{color: 'red',}} >{ errors.name}</span>
                                </div>
                                <div className="col-md-12 mb-3">
                                
                                <input 
                                    type="number" 
                                    name="phone"
                                    placeholder="MOBILE NO" 
                                    onChange={(e)=>{handleChange(e)}}  
                                    class="form-control" 
                                    id="exampleInputMobileNo"/>
                                    <span style={{color: 'red',}} >{errors.phone}</span>
                                </div>
                                <div className="col-md-12 mb-3">
                                <input type="text" 
                                    placeholder="STATE" 
                                    name="state"
                                    onChange={(e)=>{handleChange(e)}}  
                                    class="form-control" 
                                    id="exampleInputState"/>
                               <span style={{color: 'red',}} >{errors.state }</span>
                                </div>
                                <div className="col-md-12 mb-3">
                                <input 
                                    type="text"  
                                    name="city"
                                    placeholder="CITY" 
                                    onChange={(e)=>{handleChange(e)}}  
                                    class="form-control" 
                                    id="exampleInputCity"/>
                                    <span style={{color: 'red',}} >{errors.city }</span>
                                </div>
                                <div className="col-md-12 mb-3">
                                <input 
                                    type="text" 
                                    name="email"
                                    placeholder="EMAIL" 
                                    onChange={(e)=>{handleChange(e)}}  
                                    class="form-control" 
                                    id="exampleInputEmail"/>
                                <span style={{color: 'red',}} >{errors.email }</span>
                                </div>
                                <div className="col-md-12 mb-3">
                                <input 
                                    type="number" 
                                    name="pincode"
                                    placeholder="PINCODE" 
                                    onChange={(e)=>{handleChange(e)}}  
                                    class="form-control" 
                                    id="exampleInputPincode"/>
                                    <span style={{color: 'red',}} >{errors.pincode }</span>
                                </div>
                                {/* <div className="col-md-12 mb-3">
                                <input type="text" placeholder="VEHICLE" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="col-md-12 mb-3">
                                <input type="text" placeholder="VARIANT" class="form-control" id="exampleInputPassword1"/>
                                
                                </div> */}
                                <div className="col-md-12 mb-3">
                                <textarea 
                                    name="address"
                                    class="form-control" 
                                    onChange={(e)=>{handleChange(e)}}  
                                    placeholder="ADDRESS" 
                                    id="floatingTextarea"></textarea>
                                    <span style={{color: 'red',}} >{errors.address }</span>
                                </div>
                                
                                <div className="col-md-12 mb-3">
                               
                            
                                </div>
                                
                            


                            </div>

                        </div>
                    {/* </Box> */}
                </div>
                <div class="modal-footer float-right">
                    <Button data-bs-dismiss="modal" className="close modal-button" data-dismiss="modal" aria-label="Close"   style={{ backgroundColor: 'red',borderColor: 'red',width:"96px",color:"#fff", fontSize:"15px", marginTop: "14px",  height: "48px"}}   size='medium'>Cancel</Button>
                    <Button type="button" onClick={(e)=>handleSubmit(e)} className="modal-button" style={{ backgroundColor: '#183883',width:"96px",color:"#fff", fontSize:"15px", marginTop: "14px", marginLeft: "10px", height: "48px"}}   size='medium'>Submit</Button>
                </div>
                </div>
            </div>
            </div>
          
            <Button type="button"  className="button"  data-bs-toggle="modal" size='small' href="#exampleModalToggle1"  style={{ backgroundColor: '#183883',width:"96px",color:"#fff", fontSize:"15px"}}   > {header}</Button>
         

         
    </>)
}

export default BookNow;