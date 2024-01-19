import React from "react";

function Registro(){
    return(
    <div>
        <div className="Nombre">
        <p>Nombre</p>
        <input type="text" id="Nombre"/>
        <p>Apellido</p>
        <input type="text" id="Apellido"/>
        <p>Contraseña</p>
        <input type="text" id="Contraseña"/>
        </div>
        <button onClick="Registrar()">Registrar</button>
    </div>

    )
}
export default Registro;