import React from "react";
import '../styles/Boton.css';
import { useState } from "react";
function Boton(){
    const [show, setShow] = useState(true);
    return (
        <div className="container">
            <button onClick={()=>setShow((show)=>!show)}>Presiona</button>
            {show ? <h1>Hola como te llamas</h1> : null}
        </div>
    )
}
export default Boton