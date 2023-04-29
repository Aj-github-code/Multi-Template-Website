import React, { useState } from 'react';
import Data from './Data';
import './Faqs.css'


function Faqs() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  const renderList = Data.map((item, i) => (
    <div className='item' key={i} >
      <div className='title' onClick={() => toggle(i)}>
        <h4>{item.question}</h4>
        <span>{selected === i ? '-' : '+'}</span>
      </div>
      <div className={selected === i ? 'contant show' : 'contant'}>{item.answer}</div>

    </div>
  ));

  return (
    <>
    <div className='main_title'>
        <h3>FAQ's</h3>
    </div>
    <div className='wrapper'>
        
      <div className='accordion'>
        {renderList}

      </div>

    </div>
    </>
  )
}

export default Faqs;