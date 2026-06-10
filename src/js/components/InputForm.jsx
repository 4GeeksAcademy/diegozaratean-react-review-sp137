import React, { useState } from "react";

const InputForm = ()=>{

    const [inputValue,setInputValue] = useState('')

    function envioForm(e){
        console.log('envioForm')
        e.preventDefault()
        setInputValue('')
        console.log('OPRIMIO ENTER')


    }
   

    return(
        <>
            <h1>InputForm</h1>
            <form onSubmit={envioForm} >
                <input type="text" name="tarea" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            </form>
        </>
    )
}

export default InputForm