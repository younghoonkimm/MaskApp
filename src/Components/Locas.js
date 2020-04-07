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
                
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          setError("검색 결과가 없습니다.")
        } else {
          setError("잠시 후 다시 시도해주세요.")
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