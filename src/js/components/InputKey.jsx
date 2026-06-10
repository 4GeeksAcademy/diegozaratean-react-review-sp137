import React, { useState } from "react";

const InputKey = ()=>{

    const [inputValue,setInputValue] = useState('')

    function teclaAbajo(event){
        console.log('teclaAbajo')
        console.log(event.key)
        console.log(event.keyCode)
        if(event.keyCode === 13){
            setInputValue('')
            console.log('OPRIMIO ENTER')
        }

    }

    return(
        <>
            <h1>InputKey</h1>
            <input type="text" onKeyDown={teclaAbajo} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <p>El valor ingresado es {inputValue}</p>
        </>
    )
}

export default InputKey