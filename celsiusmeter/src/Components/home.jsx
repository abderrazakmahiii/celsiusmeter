import React, { useState } from 'react';
import { ImLocation2 } from 'react-icons/im';
import { IoMdRainy } from 'react-icons/io';
import { WiHumidity } from 'react-icons/wi';
import { FiWind } from 'react-icons/fi';
import { RiCloudOffFill } from 'react-icons/ri'; 

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(''); // add initial value here
  const [loaded, setLoaded] = useState(false);
  const [wrong, setWrong] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=59ab0b19fe2e3a398444b2700bd03e73`;
  const searchLocation = async (e) => {
    setLoaded(false);
    if (e.key === 'Enter' && location) {
      setWrong(''); // clear previous error message
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoaded(true);
      } catch (error) {
        if (error.response && error.response.status == 404) {
          setWrong('Location not found. Please try again.'); // show error message
        } else {
          setWrong('An error occurred. Please try again later.');
        }
      }
    }
  };
  return (
    <div id="home">
          <div id="context">
            <div id="location">
            <ImLocation2 className="icon" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter a location"
            />
          </div>
          {wrong ? <div id='lost' className={!loaded ? 'loaded' : ''}><RiCloudOffFill /><p >{wrong}</p></div>:null}
        <div id="top" className={loaded ? 'loaded' : ''}>
          <div className="left">
            <h3>{data.name}</h3> {/* remove the curly braces */}
            <h1>{data.main && data.main.temp.toFixed()+'°C'}</h1> {/* add a check for data.main */}
            <p>{data.main && `Feels like ${data.main.feels_like.toFixed()}°C`}</p> {/* add a check for data.main */}
          </div>
          <div className="right">
            {data.weather && data.weather[0].description} {/* add a check for data.weather */}
          </div>
        </div>
        <div id="bottom" className={loaded ? 'loaded' : ''}>
          <div className="element">
            <span>{data.main && `${data.main.pressure}Pa`}</span> {/* add a check for data.main */}
            <h4>
              <IoMdRainy /> Pressure
            </h4>
          </div>
          <div className="element">
            <span>{data.main && `${data.main.humidity}%`}</span> {/* add a check for data.main */}
            <h4>
              <WiHumidity /> Humidity
            </h4>
          </div>
          <div className="element">
            <span>{data.wind && `${data.wind.speed} MPH`}</span> {/* add a check for data.wind */}
            <h4>
              <FiWind /> Winds
            </h4>
          </div>
        </div>
          </div>
      </div>
  );
}
