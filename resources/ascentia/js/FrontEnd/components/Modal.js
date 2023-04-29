import React from 'react'
import { useState } from 'react';
import { Modal, ModalHeader } from "reactstrap";
import { TermsConditions } from '../common/Footer/TermsConditions';
import { ContactForm } from './Contact/ContactForm';



function Modals(Props) {
  var content = '';
  if(Props.name === "Contact"){
    content = <ContactForm/>;
    
  }
  // else if(Props.name === "Terms"){
  //   content = <TermsConditions/>;
  // }
  // else if(Props.name === "PrivacyPolicy"){
  //   content = <h1>Hello</h1>;
  // }
  else if(Props.name === "TermsConditions"){
    content = <TermsConditions/>;
  }
  // const [modal, setmodal] = useState(false)
  
  return (
    <Modal size="lg" isOpen={Props.isOpen} toggle={Props.toggle}>
      <ModalHeader>{content}</ModalHeader>
    </Modal>
  )

}
export default Modals;

