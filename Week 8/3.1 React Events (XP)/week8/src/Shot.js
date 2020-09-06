import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
background-color: blue;
color : white;
padding : 5px 15px;
border-radius : 5px;
box-shadow : 0px 2px 2px lightgray;
margin-top : 10px;
margin-left : 5px;
`;

function clickMe(){
    alert('Great shot!')
}

export default function Shot() {
    return (
      <div>
        <Button onClick={clickMe}>  
        Take the shot!
        </Button>
      </div>
    );
  }