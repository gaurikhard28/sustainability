import React from 'react';
import '../assets/styles/TabNavigation.css'


function Toast({ message, isVisible }) {
  return (
    <div style={{color:'white',backgroundColor:'#4caf50',opacity:isVisible?1:0,position: 'fixed',
        top: '10px',left:'0px',width:'100%'}}
   
    >
      <p>{message}</p>
    </div>
  );
}

export default Toast;
