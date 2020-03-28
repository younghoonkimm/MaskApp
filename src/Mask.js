import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import styled, { css } from 'styled-components';

const Btn = styled.button `
  display: block;
  width: 100px;
  background-color: yellowgreen;

`

async function getMask() {
  const response = await axios.get(
    `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json/stores`
  );
  return response.data;
}

function Mask(){   
    const { data, error, isLoading } = useAsync({
        promiseFn: getMask,
    });
    
  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  
    return(
      <>
        <ul>
          {data.map(mask => (
            <li
              key={mask.code}
            >
              {mask.addr}
            </li>
          ))}
        
        </ul>
      </>
    )
}

export default Mask