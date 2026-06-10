import React, { useState } from "react";

const Tareas = ()=>{

    const [tasks, setTasks] = useState(['make the bed','wash the dishes','watch tv','make the bed'])

    let newTask = 'repasar js'

    function addTask(){
        console.log('addTask')
        setTasks([...tasks,newTask])
        // console.log(tasks)
        // tasks.push('repasar js')
        // console.log(tasks)
    }

    return(
        <>        
            <h1>Mis tareas</h1>
            <ol>                
                {tasks.map( (tarea,index)=> <li key={index}>tarea {index}: {tarea} </li> )}
            </ol>   
            <p>hay {tasks.length} tareas</p>
            <button onClick={addTask} >Agreagr tarea</button>         
        </>
    )
}

export default Tareas