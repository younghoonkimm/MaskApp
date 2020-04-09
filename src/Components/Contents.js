import React,{ useState } from 'react'
import styled, { css } from 'styled-components';


const Content = styled.div `
  position: absolute;
  top:0;
  left:-100px;
  width: 250px;
  z-index:9999;
  padding: 5px 10px 20px;
  background:#fff;
  overflow:hidden;
  
    h3{
      font-size: 14px;
    }
    p{
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span{
      font-size: 12px;
    }
`



const Contents = (shop) => {

  const { addr, name, remain_stat } = shop.shop
  const { color, setColor } = useState('')

  


  return (
    <Content>
        <h3>{name}</h3>
        <p>{addr}</p>
        <span style={{color:{color}}}>
          {
            remain_stat
          }
        </span>
    </Content>
  )
}

export default Contents
