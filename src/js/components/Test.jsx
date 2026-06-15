import React from "react";

const Test = ()=>{

    function leerTareas(){
        console.log('leer tareas')
        fetch('https://playground.4geeks.com/todo/users/piranesi')
        .then( (response)=> response.json())
        .then( (data)=> console.log(data.todos))
    }

    function elimarTarea(){
        console.log('elimarTarea tareas')     

        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/8", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        
    }

    function crearTarea(){
        console.log('crearTarea tareas')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde postman",
                "is_done": false
            })
        };
        
        fetch('https://playground.4geeks.com/todo/todos/piranesi',requestOptions)
        .then( (response)=> response.json())
        .then( (data)=> {
            console.log(data)
            leerTareas()
        })
    }
    return(
        <>
            <h1>Test API</h1>
            <button onClick={leerTareas}>leer tareas</button>
            <button onClick={elimarTarea}>eliminar tarea</button>
            <button onClick={crearTarea}>crear tarea</button>
        </>
    )
}

export default Test