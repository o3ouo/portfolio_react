import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/Main.css';
import Mobile from './Mobile';
import Tablet from './Tablet';
import useWindowDimensions from '../customHook/useWindowDimensions';

function Main() {
  const { width } = useWindowDimensions();
  const mobile = width <= 768;

  return (
    <BrowserRouter>
      <div className='main'>
        {mobile ? <Mobile /> : <Tablet />}
      </div>
    </BrowserRouter>

  );
}

export default Main;
