import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Gnb = styled.div `
    position: absolute;
    right: 0;
    top:0;
    z-index:20;
    background-color: peru;
    width: 100vw;
    height: 50px;

    .inputSearch{
        vertical-align: middle;
        width: 200px;
        height: 30px;
        background: plum;
        float:right;
        border: none;
    }

`


function SearchInput(){
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) =>{
        
    }

    return(
        <Gnb>
            <input className='inputSearch' onChange={onChange} />
        </Gnb>
    )
}


export default SearchInput