import React, { useEffect, useState } from "react";

const Getdata =()=>{

    const [characters,setCharacters] = useState([])


    let persons = [{name: 'rick sanchez'},{name:'bruce wayne'},{name:'oliver queen'}]

    useEffect(()=>{
        console.log('estoy listo')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json() )
        .then( (data)=> setCharacters(data.results))
        // .then( (data)=> console.log(data.results))
    },[])

    return(
        <>
            <h1>Personajes</h1>
            
            {characters.map( (character)=> 
                <p key={character.id}> 
                    personaje {character.id}: {character.name} 
                    <img src={character.image}  alt={character.name}  />
                     
                </p>)}
        </>
    )
}

export default Getdata