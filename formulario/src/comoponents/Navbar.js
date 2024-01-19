import React from "react";
function Navbar(){
    return(
    <div>
        <button onClick="Inicio()">Inicio</button>
        <div>
        <button onClick="Registro()">Registro</button>
        </div>
        <div>
        <button onClick="Perfil()">Perfil</button>
        </div>
    </div>
    )
}
export default Navbar;