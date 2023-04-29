import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FrontEnd from './FrontEnd/FrontEnd';

function Main() {

  // var StoredSetup = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`))
  

  return (
    <FrontEnd />
  );
}

export default Main;
// if (document.getElementById('root')) {
//   ReactDOM.render(<Main />, document.getElementById('root'));
// }
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { map } from 'lodash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <FrontEnd />
  // </React.StrictMode>
);
// serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();