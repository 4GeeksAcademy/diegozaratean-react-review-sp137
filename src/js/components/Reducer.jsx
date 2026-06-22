import React, { useEffect, useReducer, useState } from "react";
import { counterReducer } from "./counterReducer";


const Reducer = ()=>{

    const [counter, setCounter] = useState(10)
    const [state, dispatch] = useReducer(counterReducer, {count: 0, message: 'Tu no cambiate'})

    return(
        <>
            <h1>Compnente Counter</h1>
            <p>Counter es {counter}</p>
            <button onClick={()=>setCounter(counter + 1)} >Agregar</button>

            <p>EL valor de state es {state.count} </p>
            <button onClick={()=>dispatch({type: 'increment'})} >Agregar</button>
            <button onClick={()=>dispatch({type: 'decrement'})} >quitar</button>
            <h3>{state.message}</h3>
            
        </>
    )
}

export default Reducer