import React from 'react';
import styled from 'styled-components';
import './App.css';
import Maps from './Components/Locas';


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
