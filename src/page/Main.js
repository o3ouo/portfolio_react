import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../weather/WeatherContext';
import '../css/Main.css';
import Mobile from './Mobile';
import useWindowDimensions from '../customHook/useWindowDimensions';

function Main() {
  const { width } = useWindowDimensions();
  const mobile = width <= 768;

  return (
    <BrowserRouter basename="/portfolio_react">
      <WeatherProvider>
        <div className='main'>
          <Mobile />
        </div>
      </WeatherProvider>

    </BrowserRouter>
  );
}

export default Main;
