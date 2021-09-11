import React from 'react';
import { Container, Result, Value } from './Display.style';
 const Display = ({display, formula}) => {
     return ( 
         <Container >
            <Result >{formula}</Result>
             <Value id="display">{display}</Value>
         </Container>
      );
 }
  
 export default Display;