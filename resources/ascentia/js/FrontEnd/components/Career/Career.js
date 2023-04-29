import React, { Component, useState } from 'react';
import formData from 'form-data';
import axios from "axios"
import "./Career.css"


export default function Career() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [subjects, setSubjects] = useState("")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState("")

  const handlename = (event) => {
    setName(event.target.value);
  }
  const handleemail = (event) => {
    setEmail(event.target.value);
  }
  const handlemobile = (event) => {
    setMobile(event.target.value);
  }
  const handlesubject = (event) => {
    setSubjects(event.target.value);
  }
  const handlemessage = (event) => {
    setMessage(event.target.value);
  }
  const handlefile = (event) => {
    setFile(event.target.files[0]);
  }
 const submituser= async (e) => {
    e.preventDefault();



    var data = JSON.stringify({
      "email": "do@ascentia.co.in",
      "password": "ascentia123*#"
    });
    
    var config = {
      method: 'post',
      url: 'https://service-api.primarykeytech.in/api/login',
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
        data.append('file[]', file);
        data.append('mail_type', 'text/html');
        data.append('name', name);

        var config1 = {
          method: 'post',
          url: 'https://service-api.primarykeytech.in/api/sendMailRequest',
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
            setFile("");
            setSubjects("");
            alert.show('Your CV has been received we will get back to you ASAP!');
          } else {
            alert.show(result.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        if(res.status === "success") {
        } else {
          alert.show(res.message);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });


    // const userdata = {title:title, subject:subject, body:body, email:emailId,usercode:usercode}
    // await axios.post("http://localhost/superfit_api/workorder/sendPHPMailerMail", JSON.stringify(userdata))
    // .then(result => { setMessage(result.data.msg);
    // console.log(result.data);

    //   // event.target.reset();
    // });

    // .catch((error) => {
    //   console.log(error);
    // });
 
  }

//   constructor(){
//     super();
//     this.state = {
//       fieldName:"",
//       fieldEmail:"",
//       fieldMobile:"",
//       fieldSubject:"",
//       fieldMessage:""
//     }
//   }

// render() {
  return (
    <>
      <section className='forms'>
        <div className='container'>
          <div className='inputrow'>
            <h1>CONNECT WITH US</h1>
            <p>Fields marked with an * are required</p>
            <form action='' onSubmit={ submituser }>
              <input type='text' name='name' onChange={(e)=> handlename(e)} placeholder='Name' required style={{marginBottom: "10px"}}/>
              <input type='email' name='email' onChange={(e)=> handleemail(e)} placeholder='Email' required style={{marginBottom: "10px"}} />
              <input type='text' name='mobile' onChange={(e)=> handlemobile(e)} placeholder='mobile' required style={{marginBottom: "10px"}} />
              <input type='text' name='subjects' onChange={(e)=> handlesubject(e)} placeholder='Subject' required style={{marginBottom: "10px"}} />
              <input type='file' name='file' id='file' style={{ display:"none" }} accept='images/' onChange={(e)=> handlefile(e)}/>
              <label for='file'>
                <img src="../../images/career_button.png" className="button1"/>

              </label>
              <textarea className="message" name='message' onChange={(e)=> handlemessage(e)} placeholder='Your Message' required style={{marginBottom: "10px"}} id="message" rows="4"></textarea>
              <button type='submit' className='primary-btn'>
                Submit
              </button>
            </form>
          </div>
        <img src="../../images/Group_65.png" className="careerimage"/>

        </div>
      </section>

      
    </>
  )
}

// onClickSave()
//   {
//     // alert('hii');
//     const baseUrl = "http://localhost/superfit_api/workorder/sendPHPMailerMail"
//     // alert (baseUrl);
//     const datapost = {
//       name : this.state.fieldName,
//       email : this.state.fieldEmail,
//       mobile : this.state.fieldMobile,
//       subject : this.state.fieldSubject,
//       message : this.state.fieldMessage
//     }
//     alert (datapost);
//     console.log(datapost);

//     axios.post(baseUrl,datapost)
//     .then(response=>{
//       alert(response.data.message)
//     }).catch(error=>{
//       alert("Error 500 "+error)
//     })
//   }
// }