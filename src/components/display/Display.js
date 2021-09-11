import React from 'react';
import { Container, Result, Value } from './Display.style';
 const Display = ({display, formula}) => {
     return ( 
         <Container id="display">
            <Result>{formula}</Result>
             <Value>{display}</Value>
         </Container>
      );
 }
  
 export default Display;