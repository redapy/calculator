import React from 'react';
import { Button, Grid } from './ButtonsList.styles';

const ButtonsList = ({buttons, handleInput}) => {
    return ( 
        <Grid>
            {buttons.map(button => (
                <Button 
                    key={button.id} 
                    id={button.id}
                    onClick = {() =>  handleInput(button.value, button.type)}
                    
                >{button.value}</Button>
            ))}
        </Grid>
     );
}
 
export default ButtonsList;