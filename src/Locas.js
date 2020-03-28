import React,{useEffect} from 'react'/*global kakao*/ ;
import styled, { css } from 'styled-components';

const Mapwrap = styled.div `
    #map{
      width: 100vw;
      height: 90vh;
    }

`

const Maps = () =>{
  
  useEffect(() => {
    kakao.maps.load(()=>{
      const container = document.getElementById("map") 
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }
      const map = new kakao.maps.Map(container, options) 
    }, [kakao.maps])
 });

  return (
      <Mapwrap>
        <div id="map"></div>
      </Mapwrap>
  )
}
export default Maps