import React from 'react'
import { useState } from 'react'
import axios from "axios"


export const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [subjects, setSubjects] = useState("")
  const [message, setMessage] = useState("")

  const handlename = (event) => {
    const name = event.target.value;
    console.log(name);
    setName(name);
  }
  const handleemail = (event) => {
    const email = event.target.value;
    console.log(email);
    setEmail(email);
  }
  const handlemobile = (event) => {
    const mobile = event.target.value;
    console.log(mobile);
    setMobile(mobile);
  }
  const handlesubject = (event) => {
    const subjects = event.target.value;
    console.log(subjects);
    setSubjects(subjects);
  }
  const handlemessage = (event) => {
    const message = event.target.value;
    console.log(message);
    setMessage(message);
  }
  const submituser= async (e) => {
    e.preventDefault();



    var data = JSON.stringify({
      "email": "do@ascentia.co.in",
      "password": "ascentia123*#"
    });
    
    var config = {
      method: 'post',
      url: 'https://serviceapi.primarykeytech.in/api/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    


    const body = '<div> Name: '+name+'</div><div>Email: '+email+'</div><div>Mobile: '+mobile+'</div><div>Subject: '+subjects+'</div><div>Message: '+message+'</div>';
    const usercode = 'qGwdDbcxJHD';
    
    axios(config)
    .then(function (response) {
      var res = response.data;
      if(res.data.token !== ''){
        console.log(res.data.token);

        var token = res.data.token;
       

        var data = new FormData();
        data.append('user_code', usercode);
        data.append('email', 'ajaykewat0000@gmail.com');
        data.append('body', body);
        data.append('subject', 'Ascentia Carrer');
        // data.append('file[]', file);
        data.append('mail_type', 'text/html');
        data.append('name', name);

        var config1 = {
          method: 'post',
          url: 'https://serviceapi.primarykeytech.in/api/sendMailRequest',
          headers: { 
            'Authorization': 'Bearer '+token,
          },
          data : data
        };

        axios(config1).then(function (response) {
          console.log(JSON.stringify(response.data));
          var result = response.data;
          if(result.status === "success") {
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
            setSubjects("");
            alert.show('Enquiry Submitted successfully');
          } else {
            alert.show(result.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        console.log('no token');
        if(res.status === "success") {
        } else {
          alert.show(res.message);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });



    // .catch((error) => {
    //   console.log(error);
    // });
 
  }
   
    return (
      <>
        <section className=''>
          <div className='container'>
            <div className='' style={{ maxWidth: "100%", textAlign:"center" }}>
              <h1>Inquiry Form</h1>
              <p>Fields marked with an * are required</p>
              <form action='' onSubmit={ submituser }>
              <input type='text' name='name' onChange={(e)=> handlename(e)} placeholder='Name' required style={{marginBottom: "10px"}}/>
              <input type='email' name='email' onChange={(e)=> handleemail(e)} placeholder='Email' required style={{marginBottom: "10px"}} />
              <input type='text' name='mobile' onChange={(e)=> handlemobile(e)} placeholder='mobile' required style={{marginBottom: "10px"}} />
              <input type='text' name='subject' onChange={(e)=> handlesubject(e)} placeholder='Subject' required style={{marginBottom: "10px"}} />
               <textarea className="message" name='message' onChange={(e)=> handlemessage(e)} placeholder='Your Message' required style={{marginBottom: "10px"}} id="message" rows="4"></textarea>
              <button type='submit' className='primary-btn'>
                Submit
              </button>
            </form>
            </div>
  
          </div>
        </section>
  
        
      </>
    )
  }
 

