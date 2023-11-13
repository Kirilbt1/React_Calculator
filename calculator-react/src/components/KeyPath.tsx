import React from 'react'
interface Props{
    onButtonClick:(button:string)=>void;
}
const KeyPath = ({onButtonClick}:Props) => {
    const buttons = [
        "(",
        ")",
        "C",
        "AC",
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        ".",
        "0",
        "=",
        "+",
    ];

    return (
        <div className='buttons'>
            {buttons.map((button) => (
                <button key={button} onClick={()=>onButtonClick(button)}>
                    
                    {button}
                  
                </button>
            ))}
        </div>
    )
}

export default KeyPath;
