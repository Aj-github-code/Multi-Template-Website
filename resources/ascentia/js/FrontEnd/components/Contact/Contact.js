import React, { useEffect } from "react";
// import { useMemo } from "react";

import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import "./Contact.css"
import { Modal, ModalHeader } from "reactstrap";
import { useState } from "react";
import Modals from "../Modal";


function Map() {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId")
    const lat = 22.599440;
    const lng = 88.403270;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
  });

  const [modal, setmodal] = useState(false)
  return (
    <>
      {/* <div>

      </div> */}
      {/* <img src="../../images/contact.png" className=""/> */}
      <div className="contactpage">
        <iframe id="iframeId" height="700px" width="100%"></iframe>
        <div className="contact_detail">
          <h1>Contact Details</h1>
          <p><PermContactCalendarIcon /> 194 Canal Street, 7th Ln, P.O, Sreebhumi, Kolkata, West Bengal-700048 </p>
          <div><CallIcon />+913325212262</div><div className="contacticon"><EmailIcon />do@ascentia.co.in</div>
          <img src="../../images/contact_button.png" className="contact_image" onClick={() => setmodal(true)} />
        </div>
      </div>

      <Modals toggle={() => setmodal(!modal)} isOpen={modal} name={"Contact"}>
      </Modals>
      {/* //   <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        //   <ModalHeader>Popup</ModalHeader>
        // </Modal> */}
    </>
  );
}
export default Map;
