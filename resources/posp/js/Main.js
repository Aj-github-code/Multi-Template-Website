import React from 'react';
import Routerss from './Routerss/Routerss';
import ReactDOM from 'react-dom/client';
// import Router from '../Router/Router';

function PospMain() {
  localStorage.setItem('template', 'posp');
    return (

 <>
        <Routerss/>
 </>
        );
}
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

//get your item from the localStorage
var myItem = localStorage.getItem('template');
setCookie('template', myItem, 7);
export default PospMain;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <PospMain />
  // </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('Main')).render(
//     <BrowserRouter>
//         <Main />
//     </BrowserRouter>
// )