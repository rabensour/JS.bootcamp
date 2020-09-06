import React from 'react'
import shoot from './App'
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

export default function Shot2(props) {
  const {btn} = props
    return (
      <div>
        <div>
          <Button onClick={btn}>  
           Shoot Again!
          </Button>
        </div>
      </div>
    )
}
