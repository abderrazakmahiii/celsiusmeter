import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export default function Navbar() {

  return (
    <div id='navbar'>
        <div id="left">
        <a href=''>CelsiusMeter <TiWeatherPartlySunny className='icon' /></a>
        </div>
    </div>
  )
  }