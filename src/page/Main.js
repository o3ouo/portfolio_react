import React from 'react';
import '../css/Main.css';
import Mobile from './Mobile';
import Tablet from './Tablet';
import useWindowDimensions from '../customHook/useWindowDimensions';

function Main() {
  const { width } = useWindowDimensions();
  const mobile = width <= 768;

  return (
    <div className='main'>
      {mobile ? <Mobile /> : <Tablet />}
    </div>
  );
}

export default Main;
