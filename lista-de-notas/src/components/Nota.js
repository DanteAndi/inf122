import React from 'react';
import { useState } from 'react';

function Nota({nota}){
    const[notas,setNotas]=useState([])
    const [texto, setTexto] = useState("")
    const addNota =()=>{
        setNotas([... notas ,"otra nota"])
        console.log("notas");
    };
    const onDelete =()=>{
        console.log("Eliminar");
    };
    const onEdit=()=>{
        console.log("Editar");
    };
    return(
        <div>
            <p>{nota}</p>
            <button onClick={addNota}>Agregar-Nota</button>
            <div>
            <p></p>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>    
                
            </div>
        </div>
    )
}
export default Nota