import React,{ useState, useEffect, useCallback, useRef } from 'react'/*global kakao*/ ;
import styled, { css } from 'styled-components';
import SearchInput from './input.js'
import Contents from './Contents.js'
import{ getMask } from './Mask.js';
import ReactDOMServer from 'react-dom/server';

const Mapwrap = styled.div `
    #map{
      width: 100vw;
      height: 100vh;
    }

`



const Maps = () =>{
  
  const [ map, setMap ] = useState(null);
  const [ error, setError ] = useState('');
  const [ pharmacy, setPharmacy] = useState({
    data:[]
  });
  


  const setStores = useCallback(data => {
    
    setPharmacy({
      ...pharmacy,
      data,
    })
    
  },[pharmacy])
  
 
  const setMarker = () =>{
    const { data } = pharmacy
    
      data.map(shop=>{
        const { lat, lng, } = shop;

        const marker = new kakao.maps.Marker({
          map,   
          position: new kakao.maps.LatLng(lat, lng),
          clickable: true
        })
        
        
        const overlay = new kakao.maps.CustomOverlay({
          content:ReactDOMServer.renderToStaticMarkup(
           <Contents shop={shop}  />),
          map,
          position: marker.getPosition(),
        })

        overlay.setMap(null)
        
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          overlay.setMap(map)
        });
       kakao.maps.event.addListener(marker, 'mouseout', function () {
         overlay.setMap(null)
       })
        
      })  
      
  }
  setMarker()
  
  const searchPlace = keyword => {
      const places = new kakao.maps.services.Places()
      places.keywordSearch(keyword, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const firstItem = result[0]
          const { x, y } = firstItem
          console.log(x,y)
          const moveLatLng = new kakao.maps.LatLng(y, x);
          map.panTo(moveLatLng)
          getMask(y, x, setStores)
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          setError("검색 결과가 없습니다.")
        } else {
          setError("다시 시도해주세요.")
        }
      })
    }
    
  const SeachShow = value => {
    if (value) {
      searchPlace(value)
    }
  }
 

  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.6646316280323, 127.065922449004),
      level: 2
    }
     
    const map = new kakao.maps.Map(container, options)
    setMap(map)
    getMask(37.6646316280323, 127.065922449004, setStores)
    
  }, [])


  return (
      <Mapwrap>
        <SearchInput onSearch={SeachShow}/>
        <div id="map" >
        
        </div>
      </Mapwrap>
  )
}
export default Maps