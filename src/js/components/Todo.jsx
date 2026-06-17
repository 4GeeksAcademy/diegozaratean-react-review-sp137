import React, { useEffect, useState } from "react";

const Todo = ()=>{

    const [jugador,setJugador] = useState('djokovish')

    useEffect(()=>{
        console.log('Jugador cambio')
    },[jugador])

     useEffect(()=>{
        console.log('El compnente Todo esta listo para ser utilziado')
        leerTareas()
        
    },[])

    function leerTareas(){
      
        fetch('https://playground.4geeks.com/todo/users/butcher')
        .then( (response)=> response.json())
        .then( (data)=> {
            setTasks(data.todos)
            console.log(data.todos)
        })
    }
    const [tasks,setTasks] = useState([{"label": 'espiar a los 7'},{"label":'molestar a hughie'}])

    let genero = 'ballet'

    function cambiarGenero(){
        console.log('cambiarGenero')
        console.log(genero)
        genero = 'comeercial'
        setJugador('alcaraz')
        console.log(genero)
    }

    function addTask(){        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
             "label": "pegarle a homelander",
            "is_done": false
            })
        };
        fetch('https://playground.4geeks.com/todo/todos/butcher', requestOptions)
            .then(response => response.json())
            .then( (data)=> {
                console.log(data)
                leerTareas()
            })
    }

    function deleteTask(idToDelte){
        console.log('Se debe elmimnar la tarea '+ idToDelte)
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
            };

        fetch("https://playground.4geeks.com/todo/todos/" +idToDelte, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            leerTareas()
            console.log(result)
        })

    }
    return(
        <>
            <h1>Todo comopnente</h1>
            <p>me gusta bailar {genero}</p>
            <p>me jugador favorito es  {jugador}</p>
            <button onClick={cambiarGenero}>Que mas te gusta</button>

            <h1>Tareas de butcher</h1>            

            {tasks.map( (task,index)=> 
                <p key={index}> 
                    indice {index} id {task.id} tarea {task.label}
                    <button onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>                    
                </p>
                
                )}

            <button onClick={addTask} type="button" className="btn btn-secondary">Agregar tarea</button>

            <button onClick={leerTareas} type="button" className="btn btn-secondary">Leer tareas</button>

            

            
            
        </>
    )
}

export default Todo