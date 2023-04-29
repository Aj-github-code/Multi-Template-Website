import React from 'react'

import Layout from '../components/Admin/Layout/Layout'

import Login  from '../components/Login/Login'
import Frontend from '../components/Frontend/Frontend'

import Crypt from '../Services/Crypt'

const isLoggedIn = () => {
  
  if(localStorage.getItem('_token_posp')){

    return true
  } else {
    return false
  }
}
const Routerss = () => {
  const cryptCtrl = new Crypt;
  var roles = [];
  if((localStorage.getItem('posp_user_roles') !== 'undefined') && (localStorage.getItem('posp_user_roles') !== null)){
    // alert('hii');
    var role = JSON.parse(cryptCtrl.decrypt(localStorage.getItem('posp_user_roles')))
    roles = role[0];
    
  }
  return (
    <>
      
      {isLoggedIn()
      
        ? 
        <>
          { ((roles.role_code === "SA") || (roles.role_code === "AD")) 
            ?
            <Layout />
            :
            <Frontend />
            }
        </>
          
        :
        <Login />
 
        
        }
    </>
  )
}

export default Routerss;

