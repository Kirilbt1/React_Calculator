import React, { useState } from 'react'
import Result from './Result'
import KeyPath from './KeyPath'

const Calculator = () => {
    const [calculation, setCaltulation] = useState("")

    const hangleCalculate = (button: string) => {
      switch(button){
        case"AC":
        setCaltulation("");
        break;
        case"C":
        setCaltulation(calculation.slice(0, -1));
        break;
        case"=":
        calculate();
        break;
        default:
            setCaltulation(calculation + button);
            break;
      }
    };
    const calculate=()=>{
        try{
setCaltulation(eval(calculation))
        }catch(e){
            setCaltulation("Error")
        }
    }

    return (
        <div className='calculator'>
            <input readOnly type="text" value={calculation} />
            <Result result={calculation} />
            <KeyPath onButtonClick={hangleCalculate} />
        </div>
    )
}

export default Calculator
