import React, { useState } from "react";

const Series = ()=>{

    const [favoritas, setFavoritas] = useState(['dark','how i meet your mother','modern family','stranger things','algo terrible esta apunto de suceder'])

    const [peliculas, setPeliculas] = useState( ['inception','interstellar','tres anuncios a las afueras','el corredor del laberinto','shutter island'])

    let nuevaSerie = 'game of thrones'

    function agregarSerie(){
        console.log('agregarSerie')        
        setFavoritas([...favoritas ,nuevaSerie])
    }

    return(
        <>
            <h1>Mis series favoritas</h1>
            <p>{favoritas}</p>
            {favoritas.map( (serie, index)=> <p key={index} >serie {index}: {serie} </p> )}

            {peliculas.map( (serie, index)=> <p key={index} >peliucla {index}: {serie} </p> )}
            <button onClick={agregarSerie} >Agregar serie</button>
        
        </>
    )
}

export default Series


// PSEUDOCODIGO

// estilos de la lista
// DONE: mostrar una lista en react
// DONE: mostrar el total de leementos de la lista
// quitar un elemento de una lista
// identificar cuando hago over sobre un elemnto y activar un boton
// DONE: obtener el valor de un input
// DONE: detectar cuando doy enter sobre un input
// DONE: agregar elemento a una lista