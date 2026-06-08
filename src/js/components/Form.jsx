import React, { useState } from "react";

const Form = ()=>{

    const [name, setName] = useState('harry')
    const [lastname, setLastname ] = useState('')

    

    return(
        <>        
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="ingresa tu nombre" value={name} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input type="text" onChange={(e)=>setLastname(e.target.value)} placeholder="ingresa tu apellido" value={lastname} />
            </div>
            <p>ESta personalizando el perfil de {name} {lastname}</p>
        </>
    )
}

export default Form