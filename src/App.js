import React from 'react';
import styled, { css } from 'styled-components';
import './App.css';
// import Mask from './Loca';
import Maps from './Locas';
import SearchInput from './input';
import Mask from './Mask';

const MapWrapper = styled.div `
  position: relative;
  overflow: hidden;
  

`



function App() {

  return (
    <MapWrapper>
      <SearchInput/>
      <Maps/>
    </MapWrapper>  
  
  );
}

export default App;
