import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export default function navbar() {
  return (
    <div id='navbar'>
        <div id="left">
        <a href=''>CelsiusMeter <TiWeatherPartlySunny className='icon' /></a>
        </div>
        <div id="right">
            <p>8th March 2023</p>
            <div id="location">
                <ImLocation2 className='icon' />
                <input placeholder=' New York' />
            </div>
        </div>
    </div>
  )
}
