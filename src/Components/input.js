import React, { useState } from 'react';
import styled, { css } from 'styled-components';




const Gnb = styled.div `
 
    position: absolute;
    right: 0;
    bottom:0;
    z-index:20;
    background-color: #f4fce3;
    width: 100vw;
    height: 20vh;
    color: #fff;


    .inputSearch{
        position: absolute;
        left:30%;
        top:50%;
        outline: none;
        width: 30vw;
        height: 30px;
        background-color:  #94d82d;
        border: none;
        color: #fff;
    }
    
`
const CircleBtn = styled.button `

    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    font-size:60px;
    color : #fff;
    border-radius: 40px;
    border: none; 
    outline: none;
    transition: all .125s ease-in;

`




function SearchInput({onSearch}){

    const [value, setValue] = useState('');
    const [ open, setOpen ] = useState(false)
    
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) =>{
        if(e.keyCode === 13){
            onSearch(value)
            setValue('')
        }
    }

    const gnbClose = () => setOpen(!open)

    return(
        
            <Gnb
                
            >
                <CircleBtn
                    onClick={gnbClose}
                />
                <input 
                    type='search'
                    className='inputSearch'  
                    value={value} 
                    onChange={onChange} 
                    onKeyDown={onSubmit}
                />
            </Gnb>
       
    )
}




export default SearchInput