import React from 'react';
import styled, { css } from 'styled-components';
import './App.css';
// import Mask from './Loca';
import Maps from './Components/Locas';

import Mask from './Components/Mask';

const MapWrapper = styled.div `
  position: relative;
  overflow: hidden;
  

`



function App() {

  return (
    <MapWrapper>
      <Maps/>
      
    </MapWrapper>  
    
  
  );
}

export default App;
