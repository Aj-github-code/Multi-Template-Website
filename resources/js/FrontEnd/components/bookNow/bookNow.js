import React from "react";
import { Box, Divider } from '@mui/material';
import { Button } from 'react-bootstrap';
import "./bookNow.css"
  const BookNow = (props) =>{


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

     
                <Box sx={{ width: '100%', height: '100%', typography: 'body1', backgroundColor:'white', borderRadius:"6px", padding: '2%' }}>

                    <div className="row">
                        <h3 className="text-center heading mb-5" >{props.name}</h3>

                        </div>

                        <div className="row">
                            <div className="col-md-6">

                                <img  src={props.image1} />
                                <img src={props.image2}/>
                            

                            </div>
                            <div className="col-md-6">

                                <div className="colmd-2 mb-3">
                                <input type="text" class="form-control"  placeholder="NAME" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                
                                <input type="text" placeholder="MOBILE NO"  class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text" placeholder="STATE" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text"  placeholder="CITY" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text" placeholder="EMAIL" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text" placeholder="PINCODE" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text" placeholder="VEHICLE" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <input type="text" placeholder="VARIANT" class="form-control" id="exampleInputPassword1"/>
                                
                                </div>
                                <div className="colmd-2 mb-3">
                                <textarea class="form-control" placeholder="ADDRESS" id="floatingTextarea"></textarea>
                                
                                </div>
                                
                                <div className="colmd-2 mb-3">
                               
                            
                                </div>
                                
                            


                            </div>

                        </div>
                    </Box>
                </div>
                <div class="modal-footer float-right">
                <Button data-bs-dismiss="modal" className="close" data-dismiss="modal" aria-label="Close"   style={{ backgroundColor: 'red',borderColor: 'red',width:"96px",color:"#fff", fontSize:"15px", marginTop: "14px",  height: "48px"}}   size='medium'>Cancel</Button>
                    <Button type="button" className="button" style={{ backgroundColor: '#183883',width:"96px",color:"#fff", fontSize:"15px", marginTop: "14px", marginLeft: "10px", height: "48px"}}   size='medium'>Submit</Button>
                </div>
                </div>
            </div>
            </div>
          
            <Button type="button"  className="button"  data-bs-toggle="modal" size='small' href="#exampleModalToggle1"  style={{ backgroundColor: '#183883',width:"96px",color:"#fff", fontSize:"15px"}}   > {props.name}</Button>
         

         
    </>)
}

export default BookNow;