import React from 'react'
import google from '../assets/google.png'

const GoogleLink = ({onClick}) => {
  return (
    <div type='button' onClick={onClick}>
      <div className="flex justify-center items-center gap-1 cursor-pointer">
        <img src={google} alt="goggle" />
        <p>continue with goggle</p>
      </div>
    </div>
  );
}

export default GoogleLink