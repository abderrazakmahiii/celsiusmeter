import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export default function Navbar() {

  return (
    <div id='navbar'>
        <div id="left">
        <a href=''>CelsiusMeter <TiWeatherPartlySunny className='icon' /></a>
        </div>
        <div id="editor">
          by <a href='https://abderrazakmahiii.github.io/myportfolio/' target='_blank' >Abderrazak Mahi</a>
        </div>
    </div>
  )
  }