import React,{ useState, useEffect} from 'react'/*global kakao*/ ;
import styled, { css } from 'styled-components';
import SearchInput from './input.js'

import{ getMask } from './Mask.js';

const Mapwrap = styled.div `
    #map{
      width: 100vw;
      height: 100vh;
    }
    .pharmacy{
      
    }

`



const Maps = () =>{
  
  const [ map, setMap ] = useState(null);
  const [ error, setError ] = useState('');
  const [ pharmacy, setPharmacy] = useState();
  // const [ lat, lng ] = pharmacy
  
  const setStores = data => {
    setPharmacy({
      ...pharmacy,
      data,
    })
  }
console.log(pharmacy)
  const searchPlace = keyword => {
      const places = new kakao.maps.services.Places()
      places.keywordSearch(keyword, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const firstItem = result[0]
          const { x, y } = firstItem
          const moveLatLng = new kakao.maps.LatLng(y, x);
          map.panTo(moveLatLng)
          getMask(y, x, setStores)
          
        } else {
          
          setError("404Error")
        }
      })
      
    }
    
  const SeachShow = value => {
    if (value) {
      searchPlace(value)
    }
  }
 

  // const getLocation = () => {
  //   if (navigator.geolocation) { 
  //     const [lat, lng] = pharmacy
      
  //     navigator.geolocation.getCurrentPosition( position => {
  //         const { coords } = position
  //         const { latitude, longitude } = coords
  //         const locPosition = new kakao.maps.LatLng(latitude, longitude)
  //         const message = '쥐엔장'
  //         map.panTo(locPosition);
         
  //         displayMarker(locPosition, message);
  //       }
  //     )
  //   } 
  // }
  

  // const displayMarker = (locPosition, message) =>{
  //   const marker = new kakao.maps.Marker({
  //     map: map,
  //     position: locPosition
  //   });

  //   const iwContent = message,
  //     iwRemoveable = true;

  //   const infowindow = new kakao.maps.InfoWindow({
  //     content: iwContent,
  //     removable: iwRemoveable
  //   });

  //   infowindow.open(map, marker);

  //   map.setCenter(locPosition);
  // }


  useEffect(() => {
    const container = document.getElementById("map")
    
    const options = {
      center: new kakao.maps.LatLng(37.5010881, 127.0342169),
      level: 2
    }
    
    const map = new kakao.maps.Map(container, options)
    setMap(map)
    
  }, [kakao.maps])


  return (
      <Mapwrap>
        <SearchInput onSearch={SeachShow}/>
        
        
        <div id="map" >

        </div>
        
      </Mapwrap>
  )
}
export default Maps