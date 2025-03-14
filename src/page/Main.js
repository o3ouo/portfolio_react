import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../weather/WeatherContext';
import '../css/Main.css';
import Mobile from './Mobile';
import Tablet from './Tablet';
import useWindowDimensions from '../customHook/useWindowDimensions';

function Main() {
  const { width } = useWindowDimensions();
  const mobile = width <= 768;

  return (
    <BrowserRouter>
      <WeatherProvider>
        <div className='main'>
          {mobile ? <Mobile /> : <Tablet />}
        </div>
      </WeatherProvider>

    </BrowserRouter>
  );
}

export default Main;
