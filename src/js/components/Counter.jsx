import React, { useEffect, useState } from "react";

const Counter = ()=>{

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(20)

    // useEffect(funcion de callback, un array con el o los elemntos a rastrear)
    // COTILLA
    useEffect(()=>{
        console.log('counter cambio')
        console.log('muchas cosas mas')
    },[counter])

    useEffect(()=>{
        console.log('Counter 2 cambio')
    },[counter2])

    useEffect(()=>{
        console.log('Counter o counter 2 cambiaron')
    },[counter,counter2])

    console.log('ya estoy liston ????')
    useEffect(()=>{
        console.log('Que cambio o cuando me ejecuto')
    },[])

    return(
        <>
            <h1>Compnente Counter</h1>
            <p>Counter es {counter}</p>
            <button onClick={()=>setCounter(counter + 1)} >Agregar</button>

            <p>Counter2 es {counter2}</p>
            <button onClick={()=>setCounter2(counter2 - 1)} >Quitar</button>
        </>
    )
}

export default Counter