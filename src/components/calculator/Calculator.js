import React, { useRef, useState } from 'react';
import ButtonsList from '../buttons/ButtonsList';
import Display from '../display/Display';
import { Warapper } from './Calculotor.style';


const Calculator = () => {
    
    const [display, setDisplay] = useState('0');
    const [formula, setFormula] = useState('');
    const lastPressed = useRef('');
    const endsWithOperator = /[-+*/]$/;

    const handleInput = (value, type) => {
        //Clear and Initita the states 
        if (type === 'clear') {
            setDisplay('0');
            setFormula('');
        } 
        //to prevent multipule zeros at the starts
        else if (formula === "0") {
            if (value==="0"){ return;}
            else {
                setFormula(value)
            }
            
        }
        //in case, 2 or more operators are entered consecutively
        else if (type === 'opertor' && lastPressed.current==='opertor') {
            //exclude the minus from the rule
            if (value === "-") {
                console.log(-1)
                setDisplay(value);
                setFormula(formula+value);
            //for the other opertors
            } else {
                let condition = formula;
                while (endsWithOperator.test(condition)){
                    condition = condition.slice(0,-1)
                    console.log(endsWithOperator.test(condition))
                    console.log(condition)
                }
                setDisplay(value)
                setFormula(condition+value)
             
            }
        }
        //prevent more than one decimal point
        else if (type === 'decimal' && display.includes(".")) {
            return;
        }
        //evalute the result
        else if (type === "equal") {
            let result = eval(formula).toString();
            setDisplay(result);
            setFormula(result);
            lastPressed.current = type
        }
        //start a new calculation that operates on the result of the previous evaluation
        else if (lastPressed.current ==="equal" && type === "opertor") {
            setDisplay(display);
            setFormula(display+value)
        }
        else if (type==="number" || type==="decimal") {
            if (lastPressed.current === "opertor" || display === "0") {
                setDisplay(value);
                setFormula(formula+value);
                lastPressed.current = type
            } else {
                setDisplay(display+value);
                setFormula(formula+value);
                lastPressed.current = type
            }
        }
        //display values and the formula
        else  {
            setDisplay(value);
            setFormula(formula+value);
            lastPressed.current = type
        }
        
    };



    return ( 
        <Warapper >
            <Display display={display} formula={formula} />
            <ButtonsList buttons={buttons} handleInput={handleInput}/>
        </Warapper>      
     );
}

//Array of buttons

const buttons=[
    {
     value: "0",
     id: "zero",
     type: "number"
    },
    {
     value: "1",
     id: "one",
     type: "number"
    },
    {
     value: "2",
     id:"two",
     type: "number"
    },
    {
     value: "3",
     id:"three",
     type: "number"
    },
    {
     value: "4",
     id:"four",
     type: "number"
    },
    {
     value: "5",
     id:"five",
     type: "number"
    },
    {
     value: "6", 
     id:"six",
     type: "number"
    },
    {
     value: "7",
     id:"seven",
     type: "number"
    },
    {
     value: "8", 
     id:"eight",
     type: "number"
    },
    {
     value: "9",
     id:"nine",
     type: "number"
    },
    {
     value: "+",
     id: "add",
     type: "opertor"
    },
    {
     value:"-",
     id:"subtract",
     type: "opertor"
    },
    {
     value:"*",
     id:"multiply",
     type: "opertor"
    },
    {
     value:"/",
     id:"divide",
     type: "opertor"
    },
    {
     value:"=",
     id:"equals",
     type:"equal"
    },
    {
     value:".",
     id:'decimal',
     type:"decimal"
    },
    {
     value:"AC",
     id:"clear",
     type: "clear"
    }

];


export default Calculator;