import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../weather/WeatherContext';
import '../css/Main.css';
import Mobile from './Mobile';

function Main() {

  return (
    <BrowserRouter basename= {process.env.PUBLIC_URL}>
      <WeatherProvider>
        <div className='main'>
          <Mobile />
        </div>
      </WeatherProvider>
    </BrowserRouter>
  );
}

export default Main;
