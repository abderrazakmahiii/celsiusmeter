import React from 'react'
import {IoMdRainy} from 'react-icons/io';
import {WiHumidity} from 'react-icons/wi';
import {FiWind } from 'react-icons/fi';

export default function Home() {
  return (
    <div id="home">
        <div id="home-text">
            <h1>We predict the future</h1>
            <p>Never get caught in the rain again! With CelsiusMeter, you can get up-to-date forecasts for your location and plan your day
                 with confidence. Our advanced technology provides accurate weather information, so you can stay ahead of the storm. Whether 
                 you're planning a picnic, going for a run, or heading out on a road trip, CelsiusMeter has you covered."</p>
        </div>
        <div id="weather">
            <div id="top">
                <div className="left">
                    <h3>New York</h3>
                    <h1>34°C</h1>
                    <p>Feels like 30°C</p>
                </div>
                <div className="right">
                    Sunny
                </div>
            </div>
            <div id="bottom">
                <div className='element'>
                    <h4><IoMdRainy /> Precipitation</h4>
                    <span>10%</span>
                </div>
                <div className='element'>
                    <h4><WiHumidity /> Humidity</h4>
                    <span>10%</span>
                </div>
                <div className='element'>
                    <h4><FiWind /> Precipitation</h4>
                    <span>10%</span>
                </div>
            </div>
        </div>
    </div>
  )
}
